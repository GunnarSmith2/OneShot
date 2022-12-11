import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../layout/layout";
import styles from "../styles/form.module.css";
import { HiEye } from "react-icons/hi";
import {useState} from 'react';


export default function Login() {

    const [show, setShow] = useState(false)

  return (
    <Layout>
        <Head>
            <title>OneShot-Login</title>
        </Head>

        <section className="w-3/4 mx-auto flex flex-col gap-10">
            <div className="title">
                <h1 className="text-gray-800 text-4xl font-bold py-4">
                    OneShot
                </h1>
                <p className="w-3/4 mx-auto text-gray-400">The Growing World of Esports</p>
            </div>
            {/* form */}
            <form className="flex flex-col gap-5">
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
                        type={`${show?"text" : "password" }`}
                        name="password"
                        placeholder="Password"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() =>setShow(!show)}>
                        <HiEye size={15} />
                    </span>
                </div>
                <div className="input-button">
                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                </div>
                <div className="input-button">
                    <button type="button" className={styles.button_custom}>
                        Sign in with Google <Image src={"/assets/google.svg"} alt="google" width="20" height={20}></Image>
                    </button>
                </div>
                <div className="input-button">
                    <button type="button" className={styles.button_custom}>
                        Sign in with Twitter <Image src={"/assets/twitter.png"} alt="twitter" width="20" height={20}></Image>
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
