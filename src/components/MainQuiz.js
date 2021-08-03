import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './MainQuiz.css';
export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Which of the following numbers is farthest from the number 1 on the number line?',
            2: 'Which one of the following river flows between Vindhyan and Satpura ranges?',
            3: 'The Central Rice Research Station is situated in?'
        },
        answers: {
            1: {
                1: '-10',
                2: '-5',
                3: '0',
                4: '50'
            },
            2: {
                1: 'Narmada',
                2: 'Mahanadi',
                3: 'Son',
                4: 'Ganga'
            },
            3: {
                1: 'Chennai',
                2: 'Cuttack',
                3: 'Bangalore',
                4: 'Quilon'
            }
        },
        correctAnswers: {
            1: '4',
            2: '1',
            3: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }


    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    //method to move to the previous question


    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>


                        
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                           <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
