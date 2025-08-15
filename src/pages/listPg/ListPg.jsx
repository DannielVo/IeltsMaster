import React from "react";
import "./listPg.css";
import { assets } from "../../assets/asset";

const ListPg = () => {
  return (
    <main>
      {/* <!-- Test Instruction --> */}
      <section className="instruction-wrapper">
        <h2 className="instruction-title">IELTS Academic Reading</h2>
        <div className="instruction-content">
          <ul>
            <li>50 tests - 100 attempts</li>
            <li>Choose one of the practice tests below</li>
            <li>Read the text and answer the questions</li>
            <li>
              After you finish the third section in a test, press "Get result!"
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- List test --> */}
      <section className="testList-wrapper">
        <div className="testCard-container">
          <div className="test-card">
            <div className="testCard-img">
              <img src={assets.testImg} alt="" />
            </div>

            <div className="testCard-content">
              <div className="testCard-header">
                <div className="test-title">IELTS Reading - Test #01</div>
                <div className="test-type">Academic - Reading</div>
              </div>

              <div className="testCard-body">
                <div className="test-format">
                  <i className="bxr bx-message-circle-question-mark"></i>
                  <div>40 questions</div>
                </div>
                <div className="time">60 minutes</div>
              </div>

              <div className="testCard-footer">
                <button className="takeTest-btn">Take test</button>
                <div className="card-icons">
                  <i className="card-icon save-icon bxr bx-bookmark"></i>
                  {/* <i className="save-icon bxr bx-arrow-down-square"></i>  */}
                  <i className="card-icon bxr bx-archive-arrow-down"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div className="testCard-img">
              <img src={assets.testImg} alt="" />
            </div>

            <div className="testCard-content">
              <div className="testCard-header">
                <div className="test-title">IELTS Reading - Test #01</div>
                <div className="test-type">Academic - Reading</div>
              </div>

              <div className="testCard-body">
                <div className="test-format">
                  <i className="bxr bx-message-circle-question-mark"></i>
                  <div>40 questions</div>
                </div>
                <div className="time">60 minutes</div>
              </div>

              <div className="testCard-footer">
                <button className="takeTest-btn">Take test</button>
                <i className="save-icon bxr bx-bookmark"></i>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div className="testCard-img">
              <img src={assets.testImg} alt="" />
            </div>

            <div className="testCard-content">
              <div className="testCard-header">
                <div className="test-title">IELTS Reading - Test #01</div>
                <div className="test-type">Academic - Reading</div>
              </div>

              <div className="testCard-body">
                <div className="test-format">
                  <i className="bxr bx-message-circle-question-mark"></i>
                  <div>40 questions</div>
                </div>
                <div className="time">60 minutes</div>
              </div>

              <div className="testCard-footer">
                <button className="takeTest-btn">Take test</button>
                <i className="save-icon bxr bx-bookmark"></i>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div className="testCard-img">
              <img src={assets.testImg} alt="" />
            </div>

            <div className="testCard-content">
              <div className="testCard-header">
                <div className="test-title">IELTS Reading - Test #01</div>
                <div className="test-type">Academic - Reading</div>
              </div>

              <div className="testCard-body">
                <div className="test-format">
                  <i className="bxr bx-message-circle-question-mark"></i>
                  <div>40 questions</div>
                </div>
                <div className="time">60 minutes</div>
              </div>

              <div className="testCard-footer">
                <button className="takeTest-btn">Take test</button>
                <i className="save-icon bxr bx-bookmark"></i>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div className="testCard-img">
              <img src={assets.testImg} alt="" />
            </div>

            <div className="testCard-content">
              <div className="testCard-header">
                <div className="test-title">IELTS Reading - Test #01</div>
                <div className="test-type">Academic - Reading</div>
              </div>

              <div className="testCard-body">
                <div className="test-format">
                  <i className="bxr bx-message-circle-question-mark"></i>
                  <div>40 questions</div>
                </div>
                <div className="time">60 minutes</div>
              </div>

              <div className="testCard-footer">
                <button className="takeTest-btn">Take test</button>
                <i className="save-icon bxr bx-bookmark"></i>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div className="testCard-img">
              <img src={assets.testImg} alt="" />
            </div>

            <div className="testCard-content">
              <div className="testCard-header">
                <div className="test-title">IELTS Reading - Test #01</div>
                <div className="test-type">Academic - Reading</div>
              </div>

              <div className="testCard-body">
                <div className="test-format">
                  <i className="bxr bx-message-circle-question-mark"></i>
                  <div>40 questions</div>
                </div>
                <div className="time">60 minutes</div>
              </div>

              <div className="testCard-footer">
                <button className="takeTest-btn">Take test</button>
                <i className="save-icon bxr bx-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ListPg;
