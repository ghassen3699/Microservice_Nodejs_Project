import expressApp from "./expressApp";


export const startServer = async () => {
    expressApp.listen(8000, () => {
        console.log('Catalog service is running on port 8000');
    });
}


startServer().then(() => {
    console.log('Server started successfully');
})