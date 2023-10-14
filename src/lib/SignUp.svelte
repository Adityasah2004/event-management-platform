<script>
    let username = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let errorMessage = ''; // New variable for error message
    
    let isValid = false;

    const validateForm = () => {
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;// 3-20 characters letters, numbers, underscores
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex

        // 8 characters, including uppercase, lowercase, and a digit
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; 

        const isUsernameValid = usernameRegex.test(username);
        const isEmailValid = emailRegex.test(email);
        const isPasswordValid = passwordRegex.test(password) && password === confirmPassword;

        isValid = isUsernameValid && isEmailValid && isPasswordValid;

        
        if (!isUsernameValid) {
            errorMessage = 'Invalid username. Use letters, numbers, and underscores (3-20 characters).';
        } else if (!isEmailValid) {
            errorMessage = 'Invalid email address.';
        } else if (!isPasswordValid) {
            errorMessage = 'Invalid password. It should contain at least 8 characters, including uppercase, lowercase, and a digit.';
        } else {
            errorMessage = ''; 
        }
    };

    const handleSubmit =() => {
        validateForm();
        if (isValid) {
            // API CALL
            console.log(username, email, password, confirmPassword);
            alert('Signup successful!');
        } else {
            errorMessage = 'Please fill out the form correctly.';
        }
    };
</script>


<style>
    .signup-box {
        width: 400px;
        background-color: cream;
    }

    .error-message {
        color: red;
    }
</style>

<div class="min-h-screen flex items-center justify-center bg-red-50">
    <div class="max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg signup-box">
        <h1 class="text-2xl font-semibold">Sign Up</h1>
        <form on:submit|preventDefault={handleSubmit}>
            <div class="space-y-4">
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        bind:value={username}
                        on:input={validateForm}
                        placeholder="Enter your username"
                        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        bind:value={email}
                        on:input={validateForm}
                        placeholder="Enter your email"
                        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <div class="relative">
                        <input
                            type="password"
                            id="password"
                            bind:value={password}
                            on:input={validateForm}
                            placeholder="Enter your password"
                            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        bind:value={confirmPassword}
                        on:input={validateForm}
                        placeholder="Confirm your password"
                        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
            </div>
            <button
                type="submit"
                class="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                disabled={!isValid}
            >
                Sign Up
            </button>
            {#if errorMessage}
                <p class="error-message">{errorMessage}</p>
            {/if}
        </form>
    </div>
</div>
