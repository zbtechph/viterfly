export default ( to, from ) => {
    if(to.meta.requiresAuth){
        return {
            name: 'login'
        }
    }
}