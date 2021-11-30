import React from "react";

class AdminHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }

        this.logOutAcc = this.logOutAcc.bind(this);
    }

    logOutAcc() {
        localStorage.removeItem('status');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    render() {
        return(
            <header>
                <div class="header__container">
                    <div class="header__container-user">
                        <a href="/get-profiles"><img src="./img/adminAvatar.png" alt="defaultAvatar"></img></a>
                        <a data-testid="username" class="user-link__userName" href="/get-profiles">{this.state.user.username}</a>
                    </div>
            
                    <div class="header__container-navigation">
                        <a data-testid="to-profiles" href="/get-profiles">Profiles <i class="fas fa-user-circle"></i></a>
                        <a data-testid="to-dashboard" href="/get-dashboard">Dashboard <i class="fas fa-chart-line"></i></a>
                        <a data-testid="to-users" href="/get-users">Users <i class="fas fa-user-friends"></i></a>
                    </div>
            
                    <div class="header__container-userAccount">
                        <a data-testid="to-login" href="/user-login" onClick={this.logOutAcc}>Log Out</a>
                    </div>
                </div>    
            </header>
        );
    }
}

export default AdminHeader;