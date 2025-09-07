import { useState } from "react";

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm text-center">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">About Me</a>
                    <a className="btn btn-ghost text-xl">Hobbies</a>
                    <a className="btn btn-ghost text-xl">Resume</a>
                </div>
            </div>
        </>
        
    )
}