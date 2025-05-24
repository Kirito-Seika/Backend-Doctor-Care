
const getSpecializations = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let specializations = await db.Specialization.findAll();
            resolve(specializations);
        } catch (e) {
            reject(e);
        }
    }));
}