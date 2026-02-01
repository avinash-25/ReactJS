const User = () => {
    const isLogin = false;

    return isLogin? <h3>User Dashboard Page - {isLogin}</h3> : <h3> Home Page - {isLogin}</h3>
}