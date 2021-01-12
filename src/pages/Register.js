import '../App.css';
import RegisterForm from '../components/RegisterForm';
function Register() {
    const onSubmit = data => {
        console.log(data)
    }
  return (
    <div className="App">
        <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}

export default Register;