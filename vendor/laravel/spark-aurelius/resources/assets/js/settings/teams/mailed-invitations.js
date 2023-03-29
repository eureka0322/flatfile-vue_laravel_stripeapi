module.exports = {
    props: ['team', 'invitations'],


    methods: {
        /**
         * Cancel the sent invitation.
         */
        cancel(invitation) {
            axios.delete(`/settings/invitations/${invitation.id}`)
                .then(() => {
                    debugger;
                    this.$parent.$emit('updateInvitations');
                });
        }
    }
};
