import React from "react";

function Card({username, job="software developer",image}) {
    return (
        <div className="bg=green-400 text-3xl font-bold">
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400 bg">
                            {username}
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            {job}, India
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}

export default Card;