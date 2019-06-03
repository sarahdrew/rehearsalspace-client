import React, { Component } from 'react';

export default class SignIn extends Component {
    render() {
        return (
            <body>
                <nav role="navigation">Nav</nav>
                <main role="main">
                    <header role="banner">
                        <h1>RehearsalSpace</h1>
                        <h2>Independent performers find their space</h2>
                    </header>
                    <section>
                        <header>
                            <h3>Find a place to rehearse</h3>
                        </header>

                        <p>RehearsalSpace allows owners to share their space and performers to find it.</p>
                    </section>

                    <section>
                        <header>
                            <h3>Sign in to your account</h3>
                        </header>
                        <form class='signin-form'>

                            <div>
                                <label for="username">Email</label>
                                <input type="text" name='username' id='username' />
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <input type="password" name='password' id='password' />
                            </div>
                            <button type='submit'>Sign In</button>
                        </form>
                    </section>
                </main>
                <footer>Footer</footer>
            </body>
        )
    }
}