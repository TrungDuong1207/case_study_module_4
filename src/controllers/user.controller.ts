import {Product} from "../models/product.model";
import {Category} from "../models/category.model";
import {User} from "../models/user.model";

export class UserController {
    static async showUserPage(req, res) {
        res.render("user/homeUser");
    }

    static showAboutPage(req, res) {
        res.render('user/about')
    }

    static contact (req, res) {
        res.render('user/contact')
    }
}