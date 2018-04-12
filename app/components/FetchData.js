import React, {Component} from 'react'

const FetchData = (ComposedComponent, url) => class extends Component {
    state = {
        isLoading: false,
        data: []
    }

    componentWillUpdate(nextProps){
        console.log('fetch will update', nextProps.afterUrl)
        //this.fetchJson(nextProps.afterUrl)
    }

    componentWillReceiveProps(nextProps){
        console.log('fetch will props', nextProps.afterUrl)
        this.fetchJson(nextProps.afterUrl)
    }

    fetchJson(){
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                    this.setState({
                        data: data,
                        isLoading: false
                    })
                }
            )
            .catch(ex => this.setState({data: []}))
    }

    componentWillMount() {

        this.setState({isLoading: true})
        this.fetchJson()

    }

    render(){
        return (
            <div>
                {
                (this.state.isLoading) ?
                    <div>Loading...</div> :
                    <ComposedComponent {...this.state}/>
                }
            </div>
        )
    }
}

export default FetchData