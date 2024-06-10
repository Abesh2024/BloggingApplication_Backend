const roleMiddle = (role) => (req, res, next) => {
    const user = req.user;

    if(role !== user.role) {
        return res.status(401).json({
            message: "Forbidden"
        })
    }
    next()
}

// const roleMiddle = (role) => {
//     return (req, req, next) => {
//         if (role !== user.role) {
//             return res.status(401).json({
//                 message: "Forbidden"
//             })
//         }
//     };
// };

// const roleMiddle = function (role) {
//     return function (req, res, next) {
//         if (role !== user.role) {
//             return res.status(401).json({
//                 message: "Forbidden"
//             })
//         }
//     }
// }

module.exports = roleMiddle;