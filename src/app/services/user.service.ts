import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "@angular/fire/auth";
import { userMessage } from "../models/userMessage";
import { collectionData, Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class userService {

    constructor(private auth: Auth, private firestore: Firestore) { }

    register({ email, password }: any) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login({ email, password }: any) {
        return signInWithEmailAndPassword(this.auth, email, password);
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