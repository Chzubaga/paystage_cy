
const loginpage_locators = {
    //login poage
    email_field: "#emailAddress",
    pass_field: "#password",
    submit_button: ".rs-btn",

    //Text
    login_login_text_loc: ".mb-6",
    login_email_text_loc: "#emailAddress-control-label",
    login_password_text_loc: "#password-control-label",
    login_forgotpass_text_loc: ".rs-flex-box-grid > :nth-child(1)",
    login_createacc_text_loc: ".rs-flex-box-grid > :nth-child(2)",
    
    //login page error message
    login_error_message_header: ".mb-6 > .font-medium",
    login_error_message_1: ".mt-3 > :nth-child(1)",
    login_error_message_2: ".mt-3 > :nth-child(2)" 
}

const dashboardpage_locators = {
    //Text
    dashboard_header: ".rs-panel-title > :nth-child(1)",

    //Elements
    dashboard_export_btn: ":nth-child(2) > .rs-btn > div",
    dashboard_account_number: ":nth-child(2) > .rs-table-cell > .rs-table-cell-content",
    dashboard_merchant_name: ":nth-child(3) > .rs-table-cell > .rs-table-cell-content",
    dashboard_type: ":nth-child(4) > .rs-table-cell > .rs-table-cell-content",
    dashboard_pagination: ".rs-pagination",
    dashboard_pagination_next: '[aria-label="Next"]',
    dashboard_pagination_prev: '[aria-label="Previous"]',
    dashboard_pagepicker: ".rs-picker-toggle",
    dashboard_gotosearch: ".rs-pagination-group-skip"
}

const merchantspage_locators = {
    //Text
    merchants_header: ".flex-1",

    //Elements
    merchants_export_btn: ":nth-child(2) > .rs-btn > div",
    merchants_addmerchant_btn: ".mb-4 > :nth-child(2) > .rs-btn",
    merchnats_search_filter: ".space-y-1",
    merchants_number: ":nth-child(2) > .rs-table-cell > .rs-table-cell-content",
    merchants_name: ":nth-child(3) > .rs-table-cell > .rs-table-cell-content",
    merchants_email: ":nth-child(4) > .rs-table-cell > .rs-table-cell-content",
    merchants_company_name: ":nth-child(5) > .rs-table-cell > .rs-table-cell-content",
    merchants_registered_date: ":nth-child(6) > .rs-table-cell > .rs-table-cell-content",
    merchants_pagination: ".rs-pagination",
    merchants_pagination_next: '[aria-label="Next"]',
    merchants_pagination_prev: '[aria-label="Previous"]',
    merchants_pagepicker: ".rs-picker-toggle",
    merchants_gotosearch: ".rs-pagination-group-skip"
}

const accountspage_locators = {
    //Text
    accounts_header: ".flex-1",

    //Elements
    accounts_export_btn: ".rs-flex-box-grid > :nth-child(2) > .rs-btn > div",
    accounts_createaccount_btn: ".mb-4 > :nth-child(2) > .rs-btn",
    accounts_search_filter: ".rs-form > :nth-child(1)",
    accounts_type_filter: ".rs-form > :nth-child(2)",
    accounts_kyc_filter: ".rs-form > :nth-child(3)",
    accounts_integration_filter: ".rs-form > :nth-child(4)",

    accounts_account_number: ".rs-table-cell-group > :nth-child(1) > .rs-table-cell > .rs-table-cell-content",
    accounts_merchant_name: ":nth-child(2) > .rs-table-cell > .rs-table-cell-content",
    accounts_type: ":nth-child(3) > .rs-table-cell > .rs-table-cell-content",
    accounts_kyc: ":nth-child(4) > .rs-table-cell > .rs-table-cell-content",
    accounts_integration: ":nth-child(5) > .rs-table-cell > .rs-table-cell-content",
    accounts_registered_date: ":nth-child(6) > .rs-table-cell > .rs-table-cell-content",
    
    accounts_pagination: ".rs-pagination",
    accounts_pagination_next: '[aria-label="Next"]',
    accounts_pagination_prev: '[aria-label="Previous"]',
    accounts_pagepicker: ".rs-picker-toggle",
    accounts_gotosearch: ".rs-pagination-group-skip"
}

const sidebarmenu_locators = {
    transaction_module: ":nth-child(5) > .rs-dropdown-toggle",
    transaction_submodule: ".rs-dropdown-expand > .rs-dropdown-menu > :nth-child(1) > .rs-dropdown-item",
    type_dropdown: ":nth-child(2) > .w-full > .rs-picker-toggle",
    type_withdrawal: '[data-key="withdrawal"] > .rs-picker-select-menu-item',
    vendor_dropdown: ":nth-child(4) > .w-full > .rs-picker-toggle",
    vendor_jpay: '[data-key="jpay"] > .rs-picker-select-menu-item'
}

const transactionpage_locators ={
    tablerow: '[class="rs-table-row"]',
    locator_base1: '[aria-rowindex="',
    locator_base2: '"] > .rs-table-cell-group > ',
    exist: "[aria-colindex='2'] > .rs-table-cell-content > a",

    // specific transaction row details
    transaction_number: '[aria-colindex="2"] > .rs-table-cell-content > a',
    merchant_number: '[aria-colindex="3"] > .rs-table-cell-content',
    merchant_name: '[aria-colindex="5"] > .rs-table-cell-content',
    customer_name: '.lowercase > .rs-table-cell-content > span',
    type: '[aria-colindex="7"] > .rs-table-cell-content',
    method: '[aria-colindex="8"] > .rs-table-cell-content > span',
    vendor: '[aria-colindex="9"] > .rs-table-cell-content',
    solution: '[aria-colindex="10"] > .rs-table-cell-content',
    status: '[aria-colindex="11"] > .rs-table-cell-content > span',
    amount: '[aria-colindex="12"] > .rs-table-cell-content',
    net_amount: '[aria-colindex="15"] > .rs-table-cell-content',

    // filter date
    date_dropdown: ':nth-child(8) > .w-full > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-textbox',
    date_filter1: '.rs-picker-toolbar-ranges > :nth-child(',
    date_filter2: ") > .rs-btn",

    // filter transaction type
    type_dropdown: ":nth-child(2) > .w-full > .rs-picker-toggle",
    type_withdrawal: '[data-key="withdrawal"] > .rs-picker-select-menu-item',
    type_deposit: '[data-key="deposit"] > .rs-picker-select-menu-item',

    // filter vendor
    vendor_dropdown: ":nth-child(4) > .w-full > .rs-picker-toggle",
    vendor_jpay: '[data-key="jpay"] > .rs-picker-select-menu-item',
    vendor_allbank: '[data-key="all_bank"] > .rs-picker-select-menu-item',

    // filter solution
    solution_dropdown: ":nth-child(5) > .w-full > .rs-picker-toggle",
    solution_lbtJapan: '[data-key="local_bank_japan"] > .rs-picker-select-menu-item',
    solution_QRPH: '[data-key="qrph"] > .rs-picker-select-menu-item',

    // filter status
    status_dropdown: ':nth-child(6) > .w-full > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"]',
    status_pending: '[data-key="pending"] > .rs-picker-select-menu-item',
    status_completed: '[data-key="completed"] > .rs-picker-select-menu-item',
    status_failed: '[data-key="failed"] > .rs-picker-select-menu-item',

    page_navigation_holder1: '[aria-label=',
    page_navigation_holder2: ']',

    transaction_gotosearch: '.rs-pagination-group-skip > :nth-child(2) > .rs-input',

    filterDateTemp1: '[aria-label="',
    filterDateTemp2: ' Jul 2024"] > .rs-calendar-table-cell-content > .rs-calendar-table-cell-day',
    filterOkButton: '.rs-picker-toolbar-right > .rs-btn'
}

const transactiondetails_locators ={
    merchant_number: '.gap-y-3 > :nth-child(1) > .list-value',
    status: '.gap-y-3 > :nth-child(2) > .list-value',
    type: '.gap-y-3 > :nth-child(4) > .list-value',
    merchant_name: ':nth-child(2) > .rs-panel-body > .flex > :nth-child(2) > .list-value',
    customer_name: ':nth-child(3) > .rs-panel-body > .flex > :nth-child(1) > .list-value',
    solution_ref: '.gap-y-3 > :nth-child(3) > .list-value',
    mobile: '.flex > :nth-child(3) > .list-value',
    view_payload: '.rs-timeline-item-content > .capitalize > .rs-btn-group > .rs-btn',
    close_modal: '[aria-label="close"]',
    mobdal_content: 'pre',
    view_request: '.rs-timeline-item-content > .capitalize > .rs-btn-group > :nth-child(2)',

    type_PF: '.gap-y-3 > :nth-child(3) > .list-value',
    view_payload_PF: ':nth-child(3) > .rs-timeline-item-content > .capitalize > .rs-btn-group > :nth-child(2)',
    view_request_PF: ':nth-child(2) > .rs-timeline-item-content > .capitalize > .rs-btn-group > :nth-child(2)'
}

const data_response_holder ={
    rwPayload: 'cypress/e2e/TransactionChecker/stored_data_payload.json',
    rwCompleted: 'cypress/e2e/TransactionChecker/stored_data_completed.json',
}

module.exports = {loginpage_locators, dashboardpage_locators, merchantspage_locators,
                    accountspage_locators, sidebarmenu_locators, transactionpage_locators,
                    transactiondetails_locators, data_response_holder}
// module.exports = {dashboardpage_locators}