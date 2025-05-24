
const getHomePage = async (req, res) => {
    try{
        return res.render('main/homepage/homepage.ejs');
    }catch(err){
        console.log(err);
        return res.send('loi');
    }
};

module.exports = {
    getHomePage
}