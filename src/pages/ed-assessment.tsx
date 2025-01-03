import React from "react";
import Navbar from "../../components/navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState } from "react";
import Head from "next/head";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/ed-metacard.png";
import TestForm from "../../components/test-form";
import CenterButton from "../../components/centerButton";

type Question = {
  text: string;
  options: {
    text: string;
    count: number;
  }[];
};

const questions: Question[] = [
  {
    text: "How confident do you feel that you can keep an erection?",
    options: [
      { text: "Very low", count: 1 },
      { text: "Low", count: 2 },
      { text: "Moderate", count: 3 },
      { text: "High", count: 4 },
      { text: "Very high", count: 5 },
    ],
  },
  {
    text: "When you had erections, how often were they hard enough for sex?",
    options: [
      { text: "Almost never", count: 1 },
      { text: "A few times", count: 2 },
      { text: "Sometimes ", count: 3 },
      { text: "Most times", count: 4 },
      { text: "Almost always", count: 5 },
    ],
  },
  {
    text: "During sex, how often were you able to maintain your erection after penetration? ",
    options: [
      { text: "Almost never", count: 1 },
      { text: "A few times", count: 2 },
      { text: "Sometimes", count: 3 },
      { text: "Most times", count: 4 },
      { text: "Almost always", count: 5 },
    ],
  },
  {
    text: "How difficult is it to maintain your erection until orgasm?",
    options: [
      { text: "Very difficult", count: 1 },
      { text: "Difficult", count: 2 },
      { text: "Neutral", count: 3 },
      { text: "Easy", count: 4 },
      { text: "Very easy", count: 5 },
    ],
  },
  {
    text: "Is your sex life satisfactory to you?",
    options: [
      { text: "Almost never", count: 1 },
      { text: "A few times", count: 2 },
      { text: "Sometimes", count: 3 },
      { text: "Most times", count: 4 },
      { text: "Almost always", count: 5 },
    ],
  },
];



const RiskTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [testStart, setTestStart] = useState(true);
  const [testComplete, setTestComplete] = useState(true);

  const handleOptionClick = (optionCount: number) => {
    setTotalScore(totalScore + optionCount);
    if (currentQuestionIndex === questions.length - 1) {
      setTestComplete(!testComplete);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setTotalScore(0);
    startTest();
  };

  const startTest = () => {
    setCurrentQuestionIndex(0);
    setTestStart(!testStart);
    setTotalScore(0);
  };

  const formRestartTest = () => {
    setTestComplete(!testComplete);
    restartTest();
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Erectile dysfunction self-assessment - Priv Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Priv health logo"
          property="og:image:alt"
        />
        <meta
          content="https://facebook.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/tryprivhealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tryprivhealth" />
        <meta name="twitter:creator" content="@tryprivhealth" />
        <meta
          name="twitter:image:src"
          content="https://privhealth.co/_next/static/media/ed-metacard.d34d466f.png"
        />
        <meta name="twitter:image:width" content="831" />
        <meta name="twitter:image:height" content="416" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
        <meta
          name="description"
          content="Take this free assessment to know if you may have erectile dysfunction."
        />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="https://privhealth.co/ed-assessment" property="og:url" />
        <meta
          content="Erectile dysfunction self-assessment - Priv Health"
          property="og:title"
        />
        <meta
          content="Take this free assessment to know if you may have erectile dysfunction."
          property="og:description"
        />
        <meta
          content="https://instagram.com/tryprivhealth"
          property="og:see_also"
        />
        <meta
          name="twitter:title"
          content="Erectile dysfunction self-assessment - Priv Health"
        />
        <meta
          name="twitter:description"
          content="Take this free assessment to know if you may have erectile dysfunction."
        />
        <link href="https://privhealth.co/ed-assessment" rel="canonical" />
      </Head>
      <Navbar />
      {testComplete ? (
        <div>
          {testStart ? (
            <div className=" px-5 mt-[65px] md:mt-[70px] text-center flex flex-col items-center">
              <p className="md:text-[44px] text-3xl leading-[38px] md:leading-[55px] font-bold text-[#5355AC] max-w-[490px]">
                Erectile dysfunction self-assessment
              </p>
              <p className="md:text-xl text-base mt-6 md:px-5 md:mb-9 mb-7 text-[#111111] max-w-[440px]">
                This self-assessment can help determine whether you might have
                the symptoms of erectile dysfunction.
              </p>
              <div className="max-w-[245px]">
                <CenterButton title="Take the assessment now" onClick={() => startTest()} />
              </div>
              <p className="text-sm mt-7 md:mt-9 text-[#73738C] px-5">
                *This is an assessment tool. Do not use for diagnostic purposes.
              </p>
            </div>
          ) : (
            <div className="px-5 mt-[65px] md:mt-[70px]  flex flex-col items-center justify-center">
              <div>
                <h1 className="md:text-3xl text-2xl font-bold max-w-[400px] text-[#5355AC] mb-9">
                  {currentQuestion?.text}
                </h1>
                <ul>
                  {currentQuestion?.options.map((option) => (
                    <li key={option?.text}>
                      <div
                        className="py-[16px] max-w-[400px] border border-[#D7D7DB] hover:border-[#5355AC] my-2 text-center rounded-2xl text-sm md:text-base md:leading-5 leading-4"
                        onClick={() => handleOptionClick(option?.count)}
                      >
                        {option?.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <p
                onClick={() => restartTest()}
                className="text-[#5355AC] text-[14px] leading-[17px] text-center font-medium pt-7"
              >
                Click here to start again
              </p>
            </div>
          )}
        </div>
      ) : (
        <TestForm tScore={totalScore} start={formRestartTest} />
      )}
    </div>
  );
};

export default RiskTest;
