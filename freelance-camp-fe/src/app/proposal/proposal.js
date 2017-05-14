"use strict";
var Proposal = (function () {
    function Proposal(id, customer, portifolio_url, tools, estimated_hours, hourly_rate, weeks_to_complete, client_email) {
        if (portifolio_url === void 0) { portifolio_url = "http://"; }
        this.id = id;
        this.customer = customer;
        this.portifolio_url = portifolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_email = client_email;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.js.map