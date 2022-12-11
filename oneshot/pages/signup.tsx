import Head from "next/head"
import Layout from "../layout/layout1"
import styles from "../styles/form.module.css";
import { HiEye } from "react-icons/hi";
import {useState} from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Signup() {

    const [show, setShow] = useState({ password: false, cpassword: false})

  return (
    <Layout>
        <Head>
            <title>OneShot-Signup</title>
        </Head>

        <section className="w-3/4 mx-auto flex flex-col gap-5 pb-4">
            <div className="title">
                <h1 className="text-gray-800 text-4xl font-bold py-4">
                    Sign Up
                </h1>
                <p className="w-3/4 mx-auto text-gray-400">Keep up to date with everything Esports</p>
            </div>
            {/* form */}
            <form className="flex flex-col gap-4">
                <div className={styles.input_group}>
                    <input 
                        type="text"
                        name="Username"
                        placeholder="Username"
                        className={styles.input_text}
                    />
                </div>
                <div className={styles.input_group}>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={styles.input_text}
                    />
                </div>
                <div className={styles.input_group}>
                    <input 
                        type={`${show.password?"text" : "password" }`}
                        name="password"
                        placeholder="Password"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() =>setShow(!show)}>
                        <HiEye size={15} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                        type={`${show.cpassword?"text" : "password" }`}
                        name="cpassword"
                        placeholder="Confirm Password"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() =>setShow(!show)}>
                        <HiEye size={15} />
                    </span>
                </div>
                <div className="input-button">
                    <button type="submit" className={styles.button}>
                        Sign Up
                    </button>
                </div>
            </form>
            {/* bottom */}
            <p className="text-center text-gray-400">
                Dont have have an account yet? <Link className="text-blue-700" href={'/signup'}>Sign Up</Link> 
            </p>
        </section>
    </Layout>
  )
}
