import React from 'react';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import '../css/Attempt.css'

function Attempt() {
  return (
    <div>   
        <Navbar />
        <Sidenav>
        <form>
            <table>
            <thead>
                <tr>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>How satisfied are you?</td>
                <td>
                    <div class="radio-button-container">
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio1" name="question1" value="Agree"/>
                        <label class="radio-button__label" for="radio1">
                            <span class="radio-button__custom"></span>
                            Agree
                        </label>
                    </div>
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio2" name="question1" value="Neutral"/>
                        <label class="radio-button__label" for="radio2">
                            <span class="radio-button__custom"></span>
                            Neutral
                        </label>
                    </div>
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio3" name="question1" value="Disagree"/>
                        <label class="radio-button__label" for="radio3">
                            <span class="radio-button__custom"></span>
                            Disagree
                        </label>
                    </div>
                    </div>
                </td>
                </tr>

                <tr>
                <td>How satisfied are you?</td>
                <td>
                    <div class="radio-button-container">
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio4" name="question2" value="Agree"/>
                        <label class="radio-button__label" for="radio4">
                            <span class="radio-button__custom"></span>
                            Agree
                        </label>
                    </div>
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio5" name="question2" value="Neutral"/>
                        <label class="radio-button__label" for="radio5">
                            <span class="radio-button__custom"></span>
                            Neutral
                        </label>
                    </div>
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio6" name="question2" value="Disagree"/>
                        <label class="radio-button__label" for="radio6">
                            <span class="radio-button__custom"></span>
                            Disagree
                        </label>
                    </div>
                    </div>
                </td>
                </tr>

                <tr>
                <td>How satisfied are you?</td>
                <td>
                    <div class="radio-button-container">
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio7" name="question3" value="Agree"/>
                        <label class="radio-button__label" for="radio7">
                            <span class="radio-button__custom"></span>
                            Agree
                        </label>
                    </div>
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio8" name="question3" value="Neutral"/>
                        <label class="radio-button__label" for="radio8">
                            <span class="radio-button__custom"></span>
                            Neutral
                        </label>
                    </div>
                    <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="radio9" name="question3" value="Disagree"/>
                        <label class="radio-button__label" for="radio9">
                            <span class="radio-button__custom"></span>
                            Disagree
                        </label>
                    </div>
                    </div>
                </td>
                </tr>
                
            </tbody>
            </table>
    
            <button type='submit'>Submit</button>
        </form>
        </Sidenav>
    </div>
  )
}

export default Attempt