import { registerUser } from "@lib/actions/user.action";

import { signIn } from "next-auth/react";
import validator from "validator";

export const handleAuthFormSubmit = async ({ formData, isSignin, setError, setShowLoaderOverlay, }) => {
    setShowLoaderOverlay(true)
    // Validator - to avoid XSS attacks.
    const safeData = {
        firstName: validator.escape(formData.firstName),
        lastName: validator.escape(formData.lastName),
        tel: validator.escape(formData.tel),
        image: validator.escape(formData.image),
        email: validator.escape(formData.email),
        password: validator.escape(formData.password),
        confirmPassword: validator.escape(formData.confirmPassword),
    };

    const login = async () => {
        const as = await signIn("credentials", {
            redirect: false,
            email: safeData.email,
            password: safeData.password,
        }).then((res) => {
            if (!!res.error) {
                const userNotFound = 'User not found'
                const sWrong = 'Something went wrong. Check your credentials and try again';
                const msg = res.error === userNotFound ? userNotFound : sWrong;
                setError(msg)
                return;
            }
        });
    }

    try {
        setShowLoaderOverlay(true)

        if (!isSignin) {
            const result = await registerUser(safeData);

            if (result?.status === 200) {
                login()
            }
        } else { login() };
    } catch (error) {
        setError(error.message);
    }
    setShowLoaderOverlay(false)
    return;
};