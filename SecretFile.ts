(() => {
    class SecretFile{
        secretMessage(){
            console.log("shhhh.. hora de estudiar");
        }
    }
    const secretFile = new SecretFile();
    secretFile.secretMessage();
})();