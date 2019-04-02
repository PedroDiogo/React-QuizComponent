import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton';


class QuizQuestion extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    { this.props.quiz_question.answer_options.map(
                        (item, key) => <QuizQuestionButton key={key} button_text={item} clickHandler={this.handleClick.bind(this)}/>
                      )
                    }
                </ul>
                </section>
            </main>
        )
    }

}

export default QuizQuestion;