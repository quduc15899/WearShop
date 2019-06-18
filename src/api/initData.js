const initData = () => (
    fetch('http://192.168.0.103:8080/app/')
        .then(res => res.json())
);
export default initData;