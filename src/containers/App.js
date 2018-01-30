import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './App.css';


class App extends Component {
        constructor() {
                super()
                this.state = {
                    robots: [],
                    searchfield: ''
                }
        }

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response=> response.json())
                .then(users => this.setState({ robots: users}));
        }

    // search event function 
        onSearchChange = (event) => {
            this.setState({ searchfield: event.target.value })
           
            //console.log(filteredRobots);
            
        }

        render() {
                const { robots, searchfield } = this.state;
                const filteredRobots = robots.filter(robot => {
                    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
                })
                return !robots.length ?
                     <h1>Loading</h1> :
                    (
                    <div>
                    <main>
                        <section className="jumbotron text-center">
                            <Hero />

                            <div className="search-box">
                                <SearchBox searchChange={this.onSearchChange} />
                            </div>
                        </section>
                      
                        <div className="album bg-light">
                            <CardList robots={filteredRobots} />
                        </div> 
                    </main>
                    
                    <footer class="text-muted">
                        <Footer />
                    </footer>
                    </div>
                    );
                }
        }

export default App;