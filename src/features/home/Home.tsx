/** @format */

import React from "react";
import { pageButtons } from "../../data/PageButtons";
import Card from "../../components/Card";
import styles from "./home.module.css";

const Home = () => {
  const generateAnimationDelay = (categoryIndex: number, cardIndex: number) => {
    const baseDelay = 100; // Adjust this value to control the delay between each card's animation
    let totalPreviousCards = 0;
    for (let i = 0; i < categoryIndex; i++) {
      totalPreviousCards += pageButtons[i].catCon.length;
    }
    return `${baseDelay * (totalPreviousCards + cardIndex)}ms`;
  };

  return (
    <main className="my-16 mx-4">
      <div className="mx-auto max-w-3xl text-center font-cursiveCustom">
        <h1 className={`typing text-6xl ${styles.bounce} `}>Hello,</h1>
        <h2 className="mt-6 text-xl ">
          Welcome to our collection of AAAAAAAAAAAAAAAAAAA
          <span className="text-secondary-300"> CSS and HTML tools! </span>
          Whether you're a seasoned web developer or just getting started, our
          tools are designed to make your life easier. Here, you'll find a wide
          range of tools to help you create beautiful and responsive websites
          with minimal effort.
        </h2>
        <br />
        <p className="text-xl ">Pick one below to start!</p>
      </div>
      <div className="mx-auto my-12 flex w-fit flex-wrap justify-center gap-8">
        {pageButtons.map((category, categoryIndex) =>
          category.catCon.map((button, cardIndex) => (
            <div
              key={cardIndex}
              style={{
                animationDelay: generateAnimationDelay(
                  categoryIndex,
                  cardIndex
                ),
              }}
              className={styles.cardAnimationHome}
            >
              <Card
                title={button.name}
                path={category.catPath + "/" + button.path}
                description={button.description}
              >
                <div>
                  <img
                    src={button.icon}
                    alt="tool icons"
                    className="h-[195px] pl-4"
                  />
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
