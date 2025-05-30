import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '2rem' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '3rem', color: '#333' }}>Welcome to My Portfolio</h1>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>
                    Hi, I'm Tri, a passionate Development and Cybersecurity.
                </p>
            </header>
            <section style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '1rem', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
                    I love creating impactful solutions and
                    bringing ideas to life through code and design.
                </p>
            </section>
            <section>
                <h2 style={{ fontSize: '2rem', color: '#333' }}>Contact</h2>
                <p style={{ fontSize: '1rem', color: '#555' }}>
                    Feel free to reach out to me at{' '}
                    <a href="mailto:tri_bui@hotmail.com" style={{ color: '#007BFF' }}>
                    tri_bui@hotmail.com
                    </a>
                </p>
            </section>
        </div>
    );
};

export default Home;