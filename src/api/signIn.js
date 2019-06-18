const signIn = (email, password) => (
    fetch('http://192.168.15.2:8080/app/login.php',
        {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, password })

        })
        .then(res => res.json())
);
module.exports = signIn;