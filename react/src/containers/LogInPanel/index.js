import { connect } from "react-redux";

import { actions as mapDispatchToProps } from "./actions";
import LogInPanel from "components/LogInPanel";

const mapStateToProps = ({ logInPanel }) => ({
    ...logInPanel
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPanel);