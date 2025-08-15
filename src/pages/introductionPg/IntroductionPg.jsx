import React from "react";
import "./introductionPg.css";
import SkillSection from "../../components/SkillSection/SkillSection";
import { INTRO_DETAILS } from "../../assets/asset";

const IntroductionPg = ({ isAcademic = true }) => {
  const data = isAcademic ? INTRO_DETAILS.academic : INTRO_DETAILS.general;

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

        <SkillSection
          title={data.listening.title}
          items={data.listening.items}
        ></SkillSection>

        <SkillSection
          title={data.reading.title}
          items={data.reading.items}
        ></SkillSection>

        <SkillSection
          title={data.writing.title}
          items={data.writing.items}
        ></SkillSection>

        <SkillSection
          title={data.speaking.title}
          items={data.speaking.items}
        ></SkillSection>
      </section>
    </main>
  );
};

export default IntroductionPg;
