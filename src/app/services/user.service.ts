import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, User } from "@angular/fire/auth";
import { userMessage } from "../models/userMessage";
import { user } from "../models/user";
import { collectionData, Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class userService {

    constructor(private auth: Auth, private firestore: Firestore) { }

    register(user: user) {
        return createUserWithEmailAndPassword(this.auth, user.email, user.password);
    }

    login(user: user) {
        return signInWithEmailAndPassword(this.auth, user.email, user.password);
    }

    loginWithGoogle() {
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    }

    logout() {
        return signOut(this.auth);
    }

    addUserComment(comment: userMessage) {

        const commentRef = collection(this.firestore, 'comments');
        return addDoc(commentRef, comment)

    }
}