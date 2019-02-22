import css from '../css/style.scss';
import page from '../components/page';
import Layout from '../components/Layout';
import { connect } from 'react-redux';

import { addPost } from '../store/actions/posts';
// import { Wrapper, Title } from '../css/components';

class Create extends page {
  state = {
    title: '',
    description: ''
  };

  onAddPostHandler = () => {
    const { title, description } = this.state;
    this.props.addPost({ title, description });
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, description } = this.state;
    return (
      <Layout>
        <div className={css.container}>
          <div className={css.input__group}>
            <input
              name="title"
              value={title}
              placeholder="Title"
              onChange={this.onChangeHandler}
            />
            <input
              name="description"
              value={description}
              placeholder="Description"
              onChange={this.onChangeHandler}
            />
            <button onClick={this.onAddPostHandler}>Add Post</button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(
  null,
  { addPost }
)(Create);
