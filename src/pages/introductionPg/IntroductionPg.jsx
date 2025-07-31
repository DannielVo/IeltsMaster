import React from "react";
import "./introductionPg.css";

const IntroductionPg = ({ isAcademic = true }) => {
  return (
    <main className="intro-container">
      <section className="menu-wrapper">
        <button className="menu-btn">Listening</button>
        <button className="menu-btn">Reading</button>
        <button className="menu-btn">Writing</button>
        <button className="menu-btn">Speaking</button>
      </section>

      <section className="intro-wrapper">
        <h2 className="intro-title">{`IELTS ${
          isAcademic ? "Academic" : "General"
        }`}</h2>
        <div className="intro-paragraphs">
          {isAcademic && (
            <>
              <p>
                IELTS Academic test assesses your English-language proficiency
                at an academic level to determine whether you are ready to study
                at an undergraduate or post graduate level, or work in a
                professional setting, such as doctor, nurse, teacher or lawyer.
              </p>

              <p>
                The Academic test looks at your English-language proficiency
                across the four skillsets, listening, reading, writing and
                speaking. The Listening and Speaking parts of the test are the
                same for both Academic and General Training, while the Reading
                and Writing parts are different.
              </p>
            </>
          )}

          {!isAcademic && (
            <>
              <p>
                IELTS General Training is for people who wish to live and work
                abroad in an English-speaking country. It focuses mainly on
                assessing a person’s proficiency, confidence and comfort when
                communicating in English in daily situations that you are likely
                to encounter in a native English-speaking environment.​
              </p>
            </>
          )}
        </div>
      </section>

      <section className="intro-details">
        <h2 className="details-title">{`The IELTS ${
          isAcademic ? "Academic" : "General"
        } test format`}</h2>
        <div className="listening details-element">
          <h3>Listening</h3>
          <ul>
            <li>Format: 4 sections, 40 questions, 30 minutes</li>
            <li>
              Section 1: A conversation between two people set in an everyday
              social context.
            </li>
            <li>
              Section 1: A conversation between two people set in an everyday
              social context.
            </li>
            <li>
              Section 1: A conversation between two people set in an everyday
              social context.
            </li>
            <li>
              Section 1: A conversation between two people set in an everyday
              social context.
            </li>
          </ul>
        </div>

        <div className="reading">
          <h3>Reading</h3>
          <ul>
            <li>Format: 4 sections, 40 questions, 30 minutes</li>
            <li>
              Section 1: A conversation between two people set in an everyday
              social context.
            </li>
            <li>
              Section 1: A conversation between two people set in an everyday
              social context.
            </li>
            <li>
              Section 1: A conversation between two people set in an everyday
              social context.
            </li>
            <li>
              Section 1: A conversation between two people set in an everyday
              social context.
            </li>
          </ul>
        </div>

        <div className="writing"></div>

        <div className="speaking"></div>
      </section>
    </main>
  );
};

export default IntroductionPg;
