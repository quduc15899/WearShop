const register = (email, name, password) => (
    fetch('http://192.168.15.2:8080/app/register.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, name, password })
        })
        .then(res => res.text())
);

module.exports = register;