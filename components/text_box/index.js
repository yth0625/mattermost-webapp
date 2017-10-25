// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';

import {getCurrentUserMentionKeys} from 'mattermost-redux/selectors/entities/users';

import Textbox from './textbox.jsx';

function makeMapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        mentionKeys: getCurrentUserMentionKeys(state)
    };
}

export default connect(makeMapStateToProps)(Textbox);
