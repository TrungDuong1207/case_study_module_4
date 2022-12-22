"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    static async showUserPage(req, res) {
        res.render("user/homeUser");
    }
    static showAboutPage(req, res) {
        res.render('user/about');
    }
    static contact(req, res) {
        res.render('user/contact');
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map