document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date(2025, 11, 27); 

    // Theme Toggle 
    const themeToggle = document.getElementById('themeToggle');
    const lightIcon = document.getElementById('lightIcon');
    const darkIcon = document.getElementById('darkIcon');

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    // Set initial icons
    if (savedTheme === 'dark') {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
    } else {
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Swap icons
        if (newTheme === 'dark') {
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'inline';
        } else {
            lightIcon.style.display = 'inline';
            darkIcon.style.display = 'none';
        }
    });

    // Load orders data
    fetch('assets/data/orders.data.json')
        .then(response => response.json())
        .then(orders => {
            window.orders = orders;

            // Parse dates
            orders.forEach(order => {
                const [y, m, d] = order.date.split('-');
                order.parsedDate = new Date(y, m - 1, d);
            });

            // Stats
            const total = orders.length;
            const pending = orders.filter(o => o.status === 'Pending').length;
            const revenue = orders.reduce((sum, o) => sum + o.amount, 0).toFixed(2);

            document.getElementById('totalOrders').textContent = total;
            document.getElementById('pendingOrders').textContent = pending;
            document.getElementById('revenue').textContent = `$${revenue}`;

            // Recent Activity
            const sorted = [...orders].sort((a, b) => b.parsedDate - a.parsedDate);
            const list = document.getElementById('recentActivity');
            sorted.slice(0, 5).forEach(order => {
                const ago = getTimeAgo(order.parsedDate, currentDate);
                const msg = `${order.customerName}'s order has been ${order.status.toLowerCase()}.`;
                const icon = getStatusIcon(order.status);
                const color = getStatusColor(order.status);

                const li = document.createElement('li');
                li.className = `list-group-item d-flex align-items-center ${color}`;
                li.innerHTML = `<i class="bi ${icon} me-3"></i>${msg}<small class="ms-auto text-muted">${ago}</small>`;
                list.appendChild(li);
            });

            // Initial table
            updateTable(orders);

            // Navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    const id = link.getAttribute('href').substring(1);
                    showSection(id);
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    // Close mobile menu
                    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('sidebarMenu'));
                    if (offcanvas) offcanvas.hide();
                });
            });

            // Filters
            document.getElementById('searchInput').addEventListener('input', filterOrders);
            document.getElementById('statusFilter').addEventListener('change', filterOrders);
        });

    function showSection(id) {
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.toggle('active', sec.id === id);
        });
    }

    function filterOrders() {
        const term = document.getElementById('searchInput').value.toLowerCase();
        const status = document.getElementById('statusFilter').value;

        const filtered = window.orders.filter(order =>
            order.customerName.toLowerCase().includes(term) &&
            (status === 'All' || order.status === status)
        );
        updateTable(filtered);
    }

    function updateTable(data) {
        const tbody = document.getElementById('ordersTableBody');
        tbody.innerHTML = '';
        data.forEach(order => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customerName}</td>
                <td>${order.date}</td>
                <td>$${order.amount.toFixed(2)}</td>
                <td>${order.status}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    function getTimeAgo(date, now) {
        const days = Math.floor((now - date) / (1000 * 60 * 60 * 24));
        if (days === 0) return 'Today';
        if (days === 1) return '1 day ago';
        return `${days} days ago`;
    }

    function getStatusIcon(status) {
        if (['Delivered', 'Shipped'].includes(status)) return 'bi-check-circle-fill text-success';
        if (status === 'Cancelled') return 'bi-x-circle-fill text-danger';
        return 'bi-hourglass-split text-warning';
    }

    function getStatusColor(status) {
        if (['Delivered', 'Shipped'].includes(status)) return 'text-success';
        if (status === 'Cancelled') return 'text-danger';
        return 'text-warning';
    }
});