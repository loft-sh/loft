import React from 'react';

function Home() {
    React.useEffect(() => {
        window.location.href = './getting-started/install/cli';
    }, []);

    return null
}

export default Home;
