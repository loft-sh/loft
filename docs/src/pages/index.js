import React from 'react';

function Home() {
    React.useEffect(() => {
        window.location.href = './getting-started/install';
    }, []);

    return null
}

export default Home;
