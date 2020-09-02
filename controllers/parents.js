// function deleteReview(req, res, next) {
//     const idx = req.user.reviews.findIndex(review => review.id === parseInt(req.params.id));
//     req.user.reviews.splice(idx, 1);
//     req.user.save(err => {
//         res.redirect('/games');
//     });
// }