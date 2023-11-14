async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        if (response.ok) {
            alert('User registered successfully!');
        } else {
            alert('Failed to register user.');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Internal Server Error. Please try again later.');
    }
}

async function getUserInfo() {
    try {
        const response = await fetch('/user');

        if (response.ok) {
            const userInfo = await response.json();
            document.getElementById('userInfo').innerText = `Name: ${userInfo.name}, Email: ${userInfo.email}`;
        } else {
            alert('Failed to fetch user information.');
        }
    } catch (error) {
        console.error('Error fetching user information:', error);
        alert('Internal Server Error. Please try again later.');
    }
}

async function issueCredential() {
    const credentialType = document.getElementById('credentialType').value;

    try {
        const response = await fetch('/issue-credential', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ credentialType }),
        });

        if (response.ok) {
            alert('Credential issued successfully!');
        } else {
            alert('Failed to issue credential.');
        }
    } catch (error) {
        console.error('Error during credential issuance:', error);
        alert('Internal Server Error. Please try again later.');
    }
}

async function getVerifiableCredential() {
    try {
        const response = await fetch('/verifiable-credential');

        if (response.ok) {
            const credentialInfo = await response.json();
            document.getElementById('credentialInfo').innerText = `Credential Type: ${credentialInfo.credentialType}`;
        } else {
            alert('Failed to fetch verifiable credential.');
        }
    } catch (error) {
        console.error('Error fetching verifiable credential:', error);
        alert('Internal Server Error. Please try again later.');
    }
}

getUserInfo();
getVerifiableCredential();