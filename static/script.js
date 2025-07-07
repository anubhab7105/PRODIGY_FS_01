document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const password = form.querySelector('input[type="password"]');
            if(password && password.value.length < 6) {
                e.preventDefault();
                alert('Password must be at least 6 characters');
            }
        });
    });
});