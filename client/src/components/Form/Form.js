import React from 'react';

export default props => (
    <form role="form">
        {props.children}
    </form>
);

// class Form extends React.Component {
//     Form() {
//         this.state = {

//         };
//     }

//     render(props) {
//         // props.children.forEach(child => {
//         //     console.log(child);
//         // });

//         React.Children.forEach(this.props.children, (child, i) => {
//             console.log(this.props.children);
//         });
        
//         return (
//             <form role="form">
//                 {this.props.children}
//             </form>
//         );
//     }
// }

// export default Form;