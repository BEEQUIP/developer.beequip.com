import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never
      }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
    Currency: { input: any; output: any }
    Date: { input: any; output: any }
    DateTime: { input: any; output: any }
    ISO8601DateTime: { input: any; output: any }
    Upload: { input: any; output: any }
}

/** Properties for accepting terms */
export type AcceptTermsInput = {
    accepted: Scalars['Boolean']['input']
}

/** Valid states for an attachment */
export enum AttachmentStateTypeEnum {
    Approved = 'approved',
    AwaitingApproval = 'awaiting_approval',
    ConditionallyApproved = 'conditionally_approved',
    Disapproved = 'disapproved',
    NotNecessary = 'not_necessary',
    Novel = 'novel',
    PostponedApproved = 'postponed_approved',
}

/** Valid attachment topic types */
export enum AttachmentTopicTypeEnum {
    Deal = 'Deal',
    Lease = 'Lease',
    Party = 'Party',
}

/** Valid types */
export enum AttachmentTypeEnum {
    AnnuitySchedule = 'AnnuitySchedule',
    Appraisal = 'Appraisal',
    BankStatement = 'BankStatement',
    BankTransaction = 'BankTransaction',
    BkrCheck = 'BkrCheck',
    BkrPostalCodeCheck = 'BkrPostalCodeCheck',
    ChangeInterestPercentageAnnouncement = 'ChangeInterestPercentageAnnouncement',
    ChangePurchasePriceAnnouncement = 'ChangePurchasePriceAnnouncement',
    ChangePurchasePriceWhileActiveAnnouncement = 'ChangePurchasePriceWhileActiveAnnouncement',
    CocExtract = 'CocExtract',
    CollectionAuthorization = 'CollectionAuthorization',
    Contract = 'Contract',
    ContractBeeport = 'ContractBeeport',
    ContractTransferOrPurchaseAgreement = 'ContractTransferOrPurchaseAgreement',
    CreditEstimateReport = 'CreditEstimateReport',
    Custom = 'Custom',
    DeliveryConfirmationTradeInToVendor = 'DeliveryConfirmationTradeInToVendor',
    DowJones = 'DowJones',
    DrivingLicence = 'DrivingLicence',
    EarlyBuyoutConsent = 'EarlyBuyoutConsent',
    EarlyBuyoutProposal = 'EarlyBuyoutProposal',
    EuroPermit = 'EuroPermit',
    Financials = 'Financials',
    Fundflow = 'Fundflow',
    GeneralLienWaver = 'GeneralLienWaver',
    GoogleMaps = 'GoogleMaps',
    GoogleSearch = 'GoogleSearch',
    GoogleStreetview = 'GoogleStreetview',
    Identification = 'Identification',
    Indication = 'Indication',
    IndicationBeedirect = 'IndicationBeedirect',
    Insurance = 'Insurance',
    Invoice = 'Invoice',
    KvoContractTransferAnnouncement = 'KvoContractTransferAnnouncement',
    KvoOriginalContract = 'KvoOriginalContract',
    LienWaverForm = 'LienWaverForm',
    OperationalLeaseRulingDecision = 'OperationalLeaseRulingDecision',
    OriginalInvoice = 'OriginalInvoice',
    PackingSlip = 'PackingSlip',
    PaymentConfirmation = 'PaymentConfirmation',
    PaymentConfirmationDownPaymentToVendor = 'PaymentConfirmationDownPaymentToVendor',
    PaymentGroupOverview = 'PaymentGroupOverview',
    PaymentOverview = 'PaymentOverview',
    PictureCertification = 'PictureCertification',
    PictureExterior = 'PictureExterior',
    PictureIdentification = 'PictureIdentification',
    PictureTotalUsage = 'PictureTotalUsage',
    PredefinedCustomAttachment = 'PredefinedCustomAttachment',
    PreviousContract = 'PreviousContract',
    PreviousIndication = 'PreviousIndication',
    PreviousSignedContract = 'PreviousSignedContract',
    ProofOfDelivery = 'ProofOfDelivery',
    RecoveryIntakeForm = 'RecoveryIntakeForm',
    Registration = 'Registration',
    RegistrationPrerequisite = 'RegistrationPrerequisite',
    RemarketingPicture = 'RemarketingPicture',
    RentalContract = 'RentalContract',
    RepurchaseNotice = 'RepurchaseNotice',
    SalesNotice = 'SalesNotice',
    SignedContract = 'SignedContract',
    SignedPurchaseAgreement = 'SignedPurchaseAgreement',
    SignedReciprocalGuarantorsForm = 'SignedReciprocalGuarantorsForm',
    SignedRemarketingSaleContract = 'SignedRemarketingSaleContract',
    SignedSupplierOwnershipDeclaration = 'SignedSupplierOwnershipDeclaration',
    SignedSuretyForm = 'SignedSuretyForm',
    SignedUboStatementForm = 'SignedUboStatementForm',
    SignedVendorCompensationDeclaration = 'SignedVendorCompensationDeclaration',
    SpecificLienWaver = 'SpecificLienWaver',
    Statutes = 'Statutes',
    SupplierOwnershipDeclaration = 'SupplierOwnershipDeclaration',
    SuretiesForm = 'SuretiesForm',
    SuretiesFormExplanation = 'SuretiesFormExplanation',
    ThirdPartyClauseInstructions = 'ThirdPartyClauseInstructions',
    TrackAndTrace = 'TrackAndTrace',
    TwikeyAuthorization = 'TwikeyAuthorization',
    UboRegisterExcerpt = 'UboRegisterExcerpt',
    UboStatementForm = 'UboStatementForm',
    VatAnnuitySchedule = 'VatAnnuitySchedule',
    VatNumberCheck = 'VatNumberCheck',
    VendorCompensationDeclaration = 'VendorCompensationDeclaration',
    VendorQuote = 'VendorQuote',
    VisCheck = 'VisCheck',
    YearlyOverview = 'YearlyOverview',
}

export type AuthenticateInput = {
    code: Scalars['String']['input']
    dealToken?: InputMaybe<Scalars['String']['input']>
    organizationToken?: InputMaybe<Scalars['String']['input']>
    persistenceType?: InputMaybe<GraphqlAuthenticationPersistenceTypeEnum>
}

/** Valid colors for auto-LGD traffic light */
export enum AutoLgdEnum {
    Green = 'green',
    Orange = 'orange',
    Red = 'red',
}

/** Valid colors for auto-PD traffic light */
export enum AutoPdEnum {
    Green = 'green',
    Orange = 'orange',
    Red = 'red',
}

/** Valid colors for auto-soft-KYC traffic light */
export enum AutoSoftKycEnum {
    Blue = 'blue',
    Green = 'green',
    Orange = 'orange',
    Red = 'red',
}

/** Possible states for BankCreditAnalysisDossiers */
export enum BankCreditAnalysisDossierStateEnum {
    Closed = 'closed',
    Completed = 'completed',
    Error = 'error',
    Initial = 'initial',
    NotShared = 'not_shared',
    Open = 'open',
}

/** Valid colours for bank credit analysis requirement traffic light */
export enum BankCreditAnalysisRequirementTrafficLightEnum {
    Green = 'green',
    Orange = 'orange',
    Red = 'red',
}

/** Valid consent types for bank transaction dossier */
export enum BankTransactionDossierConsentTypeEnum {
    ManualUpload = 'manual_upload',
    Psd2 = 'psd2',
}

/** Valid states for bank transaction dossier */
export enum BankTransactionDossierStateEnum {
    BankChosen = 'bank_chosen',
    Closed = 'closed',
    ConsentFailed = 'consent_failed',
    ConsentGranted = 'consent_granted',
    ConsentProcessing = 'consent_processing',
    ConsentRevoked = 'consent_revoked',
    Error = 'error',
    NewDossier = 'new_dossier',
}

/** Valid colours for bank transaction requirement traffic light */
export enum BankTransactionsRequirementTrafficLightEnum {
    Green = 'green',
    Orange = 'orange',
    Red = 'red',
}

/** Properties for (re)calculating a lease group */
export type CalculateLeaseGroupInput = {
    /** Amount that customer pays when transferring ownership of object, optional when using monthlyBudget */
    balloonPayment?: InputMaybe<Scalars['Currency']['input']>
    /** ID of the category to which the object belongs */
    categoryId?: InputMaybe<Scalars['ID']['input']>
    /** Specifies the fixed contribution the intermediary wants to make, to use intermediary contribution for this deal */
    customIntermediaryFixedContribution?: InputMaybe<
        Scalars['Currency']['input']
    >
    /** Specifies the target interest percentage the intermediary wants to use for this deal, when using intermediary contribution */
    customIntermediaryTargetInterestPercentage?: InputMaybe<
        Scalars['Float']['input']
    >
    /** ID of the deal, used to scope the leaseId as intermediary or customer user */
    dealId?: InputMaybe<Scalars['ID']['input']>
    /** Amount that customer pays up-front when the object is bought, optional when using monthlyBudget */
    downPayment?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies whether intermediary wants to receive a fee */
    intermediaryFeeEnabledByIntermediary?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies the desired fee as percentage of object for intermediary */
    intermediaryFeePercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Token of the intermediary, used to apply intermediary settings */
    intermediaryToken?: InputMaybe<Scalars['String']['input']>
    /** ID of the lease to (re)calculate, only required when using existing lease */
    leaseId?: InputMaybe<Scalars['ID']['input']>
    /** Amount that the object is wort, purchasePrice is used as default, can be overwritten with good reason */
    marketValue?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer is willing to pay per month for object, will be used to calculate purchasePrice */
    monthlyBudget?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies whether object is new or used */
    objectUsed?: InputMaybe<Scalars['Boolean']['input']>
    /** Construction date of the object */
    objectYear: Scalars['Int']['input']
    /** Specifies when the planned date when the lease will start */
    plannedStartOn?: InputMaybe<Scalars['Date']['input']>
    /** Amount that customer could pay to transfer ownership of object, only applicable with operational leases, optional when using monthlyBudget */
    purchaseOption?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the object will be bought for, optional when using monthlyBudget */
    purchasePrice?: InputMaybe<Scalars['Currency']['input']>
    /** Amount of objects */
    quantity: Scalars['Int']['input']
    /** Tenor of the lease in months, optional when using monthlyBudget */
    tenor?: InputMaybe<Scalars['Int']['input']>
    /** Token of the deal, used to scope the leaseId as anonymous user */
    token?: InputMaybe<Scalars['String']['input']>
    /** Specifies the type of financing, preferred argument over use operational or withSale arguments */
    typeOfFinance?: InputMaybe<TypeOfFinanceEnum>
    /** Specifies whether object will be rented out to others */
    withRentOut?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * This are the arguments to (re)calculate a lease.
 *
 * When (re)calculating for an existing lease you only need
 * to specify the arguments that change. When (re)calculating
 * a new lease you need to supply the lease components
 * these can be provided in several ways:
 *   1. By specifying individual components e.g. tenor, purchasePrice, downPayment, balloonPayment
 *   2. By specifying a monthlyBudget, we will calculate the components based on the given budget
 *   3. By specifying a monthlyBudget together with individual components, we will calculate the components based
 *      on the given budget where the given components are fixed
 *
 */
export type CalculateLeaseInput = {
    /** Amount that customer pays when transferring ownership of object, optional when using monthlyBudget */
    balloonPayment?: InputMaybe<Scalars['Currency']['input']>
    /** ID of the category to which the object belongs */
    categoryId?: InputMaybe<Scalars['ID']['input']>
    /** Specifies the fixed contribution the intermediary wants to make, to use intermediary contribution for this deal */
    customIntermediaryFixedContribution?: InputMaybe<
        Scalars['Currency']['input']
    >
    /** Specifies the target interest percentage the intermediary wants to use for this deal, when using intermediary contribution */
    customIntermediaryTargetInterestPercentage?: InputMaybe<
        Scalars['Float']['input']
    >
    /** ID of the deal, used to scope the leaseId as intermediary or customer user */
    dealId?: InputMaybe<Scalars['ID']['input']>
    /** Amount that customer pays up-front when the object is bought, optional when using monthlyBudget */
    downPayment?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies whether intermediary wants to receive a fee */
    intermediaryFeeEnabledByIntermediary?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies the desired fee as percentage of object for intermediary */
    intermediaryFeePercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Token of the intermediary, used to apply intermediary settings */
    intermediaryToken?: InputMaybe<Scalars['String']['input']>
    /** ID of the lease to (re)calculate, only required when using existing lease */
    leaseId?: InputMaybe<Scalars['ID']['input']>
    /** Amount that the object is wort, purchasePrice is used as default, can be overwritten with good reason */
    marketValue?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer is willing to pay per month for object, will be used to calculate purchasePrice */
    monthlyBudget?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies whether object is new or used */
    objectUsed?: InputMaybe<Scalars['Boolean']['input']>
    /** Construction date of the object */
    objectYear: Scalars['Int']['input']
    /** Specifies when the planned date when the lease will start */
    plannedStartOn?: InputMaybe<Scalars['Date']['input']>
    /** Amount that customer could pay to transfer ownership of object, only applicable with operational leases, optional when using monthlyBudget */
    purchaseOption?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the object will be bought for, optional when using monthlyBudget */
    purchasePrice?: InputMaybe<Scalars['Currency']['input']>
    /** Tenor of the lease in months, optional when using monthlyBudget */
    tenor?: InputMaybe<Scalars['Int']['input']>
    /** Token of the deal, used to scope the leaseId as anonymous user */
    token?: InputMaybe<Scalars['String']['input']>
    /** Specifies the type of financing, preferred argument over use operational or withSale arguments */
    typeOfFinance?: InputMaybe<TypeOfFinanceEnum>
    /** Specifies whether object will be rented out to others */
    withRentOut?: InputMaybe<Scalars['Boolean']['input']>
}

/** Properties for cancelling a deal */
export type CancelDealInput = {
    cancelReason: CancelDealReasonEnum
    comments?: InputMaybe<Scalars['String']['input']>
    dealId: Scalars['ID']['input']
}

/** Valid pre-defined reasons to cancel a deal */
export enum CancelDealReasonEnum {
    NoActivityContactDetails = 'no_activity_contact_details',
    NoActivityDifferentOrganization = 'no_activity_different_organization',
    NoActivityDoNotApproach = 'no_activity_do_not_approach',
    NoActivityNoCustomerActivity = 'no_activity_no_customer_activity',
    OrientateNoFittingEquipment = 'orientate_no_fitting_equipment',
    OrientateNotLookingForFinancing = 'orientate_not_looking_for_financing',
    OrientateSelfFinanced = 'orientate_self_financed',
    OrientateTest = 'orientate_test',
    OrientateUndecidedVendor = 'orientate_undecided_vendor',
    OtherDuplicate = 'other_duplicate',
    PriceHandlingFee = 'price_handling_fee',
    PriceInterest = 'price_interest',
    PriceMonthlyPayment = 'price_monthly_payment',
    TermsDownPayment = 'terms_down_payment',
    TermsIntermediaryFee = 'terms_intermediary_fee',
    TermsSpeed = 'terms_speed',
    TermsTenor = 'terms_tenor',
    TermsTermsAndConditions = 'terms_terms_and_conditions',
}

/** Properties for getting category suggestions */
export type CategorySuggestionsInput = {
    includeInactiveCategories?: InputMaybe<Scalars['Boolean']['input']>
    objectBrand: Scalars['String']['input']
    objectType: Scalars['String']['input']
}

/** Possible status type for the CategorySuggestions query */
export enum CategorySuggestionsStatusEnum {
    CategorySuggestionsCompleted = 'category_suggestions_completed',
    CategorySuggestionsFailed = 'category_suggestions_failed',
    ValidationFailed = 'validation_failed',
}

/** Valid limit states for collection mandate */
export enum CollectionMandateLimitStateEnum {
    Insufficient = 'insufficient',
    Sufficient = 'sufficient',
}

/** Valid states for collection mandate */
export enum CollectionMandateStatusEnum {
    AwaitingCustomer = 'awaiting_customer',
    AwaitingCustomerExtraSignatures = 'awaiting_customer_extra_signatures',
    AwaitingCustomerPrintUpload = 'awaiting_customer_print_upload',
    Cancelled = 'cancelled',
    Expired = 'expired',
    Given = 'given',
    Pending = 'pending',
}

/** Valid types for collection mandate */
export enum CollectionMandateTypeEnum {
    External = 'external',
    Manual = 'manual',
    Twikey = 'twikey',
}

export type ConfirmSignatoryChoiceInput = {
    token: Scalars['String']['input']
}

export type ContactFilterInput = {
    contactableType?: InputMaybe<ContactableTypesEnum>
    receivesInvoices?: InputMaybe<Scalars['Boolean']['input']>
}

export enum ContactOrderFieldEnum {
    Name = 'name',
}

export type ContactOrderInput = {
    direction: DealOrderDirectionEnum
    field: ContactOrderFieldEnum
}

export enum ContactableTypesEnum {
    ContactPerson = 'ContactPerson',
    CustomerUser = 'CustomerUser',
}

export enum CountryCodeEnum {
    Ad = 'AD',
    Ae = 'AE',
    Af = 'AF',
    Ag = 'AG',
    Ai = 'AI',
    Al = 'AL',
    Am = 'AM',
    Ao = 'AO',
    Aq = 'AQ',
    Ar = 'AR',
    As = 'AS',
    At = 'AT',
    Au = 'AU',
    Aw = 'AW',
    Ax = 'AX',
    Az = 'AZ',
    Ba = 'BA',
    Bb = 'BB',
    Bd = 'BD',
    Be = 'BE',
    Bf = 'BF',
    Bg = 'BG',
    Bh = 'BH',
    Bi = 'BI',
    Bj = 'BJ',
    Bl = 'BL',
    Bm = 'BM',
    Bn = 'BN',
    Bo = 'BO',
    Bq = 'BQ',
    Br = 'BR',
    Bs = 'BS',
    Bt = 'BT',
    Bv = 'BV',
    Bw = 'BW',
    By = 'BY',
    Bz = 'BZ',
    Ca = 'CA',
    Cc = 'CC',
    Cd = 'CD',
    Cf = 'CF',
    Cg = 'CG',
    Ch = 'CH',
    Ci = 'CI',
    Ck = 'CK',
    Cl = 'CL',
    Cm = 'CM',
    Cn = 'CN',
    Co = 'CO',
    Cr = 'CR',
    Cu = 'CU',
    Cv = 'CV',
    Cw = 'CW',
    Cx = 'CX',
    Cy = 'CY',
    Cz = 'CZ',
    De = 'DE',
    Dj = 'DJ',
    Dk = 'DK',
    Dm = 'DM',
    Do = 'DO',
    Dz = 'DZ',
    Ec = 'EC',
    Ee = 'EE',
    Eg = 'EG',
    Eh = 'EH',
    Er = 'ER',
    Es = 'ES',
    Et = 'ET',
    Fi = 'FI',
    Fj = 'FJ',
    Fk = 'FK',
    Fm = 'FM',
    Fo = 'FO',
    Fr = 'FR',
    Ga = 'GA',
    Gb = 'GB',
    Gd = 'GD',
    Ge = 'GE',
    Gf = 'GF',
    Gg = 'GG',
    Gh = 'GH',
    Gi = 'GI',
    Gl = 'GL',
    Gm = 'GM',
    Gn = 'GN',
    Gp = 'GP',
    Gq = 'GQ',
    Gr = 'GR',
    Gs = 'GS',
    Gt = 'GT',
    Gu = 'GU',
    Gw = 'GW',
    Gy = 'GY',
    Hk = 'HK',
    Hm = 'HM',
    Hn = 'HN',
    Hr = 'HR',
    Ht = 'HT',
    Hu = 'HU',
    Id = 'ID',
    Ie = 'IE',
    Il = 'IL',
    Im = 'IM',
    In = 'IN',
    Io = 'IO',
    Iq = 'IQ',
    Ir = 'IR',
    Is = 'IS',
    It = 'IT',
    Je = 'JE',
    Jm = 'JM',
    Jo = 'JO',
    Jp = 'JP',
    Ke = 'KE',
    Kg = 'KG',
    Kh = 'KH',
    Ki = 'KI',
    Km = 'KM',
    Kn = 'KN',
    Kp = 'KP',
    Kr = 'KR',
    Kw = 'KW',
    Ky = 'KY',
    Kz = 'KZ',
    La = 'LA',
    Lb = 'LB',
    Lc = 'LC',
    Li = 'LI',
    Lk = 'LK',
    Lr = 'LR',
    Ls = 'LS',
    Lt = 'LT',
    Lu = 'LU',
    Lv = 'LV',
    Ly = 'LY',
    Ma = 'MA',
    Mc = 'MC',
    Md = 'MD',
    Me = 'ME',
    Mf = 'MF',
    Mg = 'MG',
    Mh = 'MH',
    Mk = 'MK',
    Ml = 'ML',
    Mm = 'MM',
    Mn = 'MN',
    Mo = 'MO',
    Mp = 'MP',
    Mq = 'MQ',
    Mr = 'MR',
    Ms = 'MS',
    Mt = 'MT',
    Mu = 'MU',
    Mv = 'MV',
    Mw = 'MW',
    Mx = 'MX',
    My = 'MY',
    Mz = 'MZ',
    Na = 'NA',
    Nc = 'NC',
    Ne = 'NE',
    Nf = 'NF',
    Ng = 'NG',
    Ni = 'NI',
    Nl = 'NL',
    No = 'NO',
    Np = 'NP',
    Nr = 'NR',
    Nu = 'NU',
    Nz = 'NZ',
    Om = 'OM',
    Pa = 'PA',
    Pe = 'PE',
    Pf = 'PF',
    Pg = 'PG',
    Ph = 'PH',
    Pk = 'PK',
    Pl = 'PL',
    Pm = 'PM',
    Pn = 'PN',
    Pr = 'PR',
    Ps = 'PS',
    Pt = 'PT',
    Pw = 'PW',
    Py = 'PY',
    Qa = 'QA',
    Re = 'RE',
    Ro = 'RO',
    Rs = 'RS',
    Ru = 'RU',
    Rw = 'RW',
    Sa = 'SA',
    Sb = 'SB',
    Sc = 'SC',
    Sd = 'SD',
    Se = 'SE',
    Sg = 'SG',
    Sh = 'SH',
    Si = 'SI',
    Sj = 'SJ',
    Sk = 'SK',
    Sl = 'SL',
    Sm = 'SM',
    Sn = 'SN',
    So = 'SO',
    Sr = 'SR',
    Ss = 'SS',
    St = 'ST',
    Sv = 'SV',
    Sx = 'SX',
    Sy = 'SY',
    Sz = 'SZ',
    Tc = 'TC',
    Td = 'TD',
    Tf = 'TF',
    Tg = 'TG',
    Th = 'TH',
    Tj = 'TJ',
    Tk = 'TK',
    Tl = 'TL',
    Tm = 'TM',
    Tn = 'TN',
    To = 'TO',
    Tr = 'TR',
    Tt = 'TT',
    Tv = 'TV',
    Tw = 'TW',
    Tz = 'TZ',
    Ua = 'UA',
    Ug = 'UG',
    Um = 'UM',
    Us = 'US',
    Uy = 'UY',
    Uz = 'UZ',
    Va = 'VA',
    Vc = 'VC',
    Ve = 'VE',
    Vg = 'VG',
    Vi = 'VI',
    Vn = 'VN',
    Vu = 'VU',
    Wf = 'WF',
    Ws = 'WS',
    Ye = 'YE',
    Yt = 'YT',
    Za = 'ZA',
    Zm = 'ZM',
    Zw = 'ZW',
}

export type CreateBankTransactionsUploadInput = {
    acceptedBankTransactionUsage: Scalars['Boolean']['input']
    bankBic: Scalars['String']['input']
    file: Scalars['Upload']['input']
    token: Scalars['String']['input']
}

export type CreateCollectionAuthorizationUploadInput = {
    file: Scalars['Upload']['input']
    token: Scalars['String']['input']
}

export type CreateContractInput = {
    leaseId: Scalars['ID']['input']
    token: Scalars['String']['input']
}

/** Properties for creating a deal */
export type CreateDealInput = {
    cocNumber: Scalars['String']['input']
    comments?: InputMaybe<Scalars['String']['input']>
    contactPerson?: InputMaybe<DealContactPersonInput>
    externalSource: DealExternalSourceEnum
    intermediaryToken?: InputMaybe<Scalars['String']['input']>
    leases?: InputMaybe<Array<CreateLeaseInput>>
    marketingOptions?: InputMaybe<MarketingOptions>
    state?: InputMaybe<DealStatesEnum>
}

export type CreateIndicationInput = {
    dealId: Scalars['ID']['input']
}

/** Properties for creating a lease group */
export type CreateLeaseGroupInput = {
    /** Specifies the advertisement url */
    advertisingUrl?: InputMaybe<Scalars['String']['input']>
    /** Amount that customer pays when transferring ownership of object, optional when using monthlyBudget */
    balloonPayment?: InputMaybe<Scalars['Currency']['input']>
    /** ID of the object on the Beezaar marketplace */
    beezaarObjectId?: InputMaybe<Scalars['ID']['input']>
    /** ID of the category to which the object belongs */
    categoryId: Scalars['ID']['input']
    /** Specifies the custom interest percentage the intermediary wants to use for this deal */
    customInterestPercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Specifies whether object has a track and trace system */
    customTrackAndTraceRequired?: InputMaybe<Scalars['Boolean']['input']>
    /** ID of the deal to create the lease for, only required when creating the lease separate from the deal e.g. in a separate mutation */
    dealId?: InputMaybe<Scalars['ID']['input']>
    /** Amount that customer pays up-front when the object is bought, optional when using monthlyBudget */
    downPayment?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer pays up-front to the vender when the object is bought. */
    downPaymentToVendor?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies whether intermediary wants to receive a fee */
    intermediaryFeeEnabledByIntermediary?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies the desired fee as percentage of object for intermediary */
    intermediaryFeePercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Amount that the object is worth, purchasePrice is used as default, can be overwritten with good reason */
    marketValue?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer is willing to pay per month for object, will be used to calculate purchasePrice */
    monthlyBudget?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the estimated amount of kilometers or hours that object will be used every year */
    objectAnnualUsage?: InputMaybe<Scalars['Int']['input']>
    /** Axle configuration for the object */
    objectAxleConfiguration?: InputMaybe<Scalars['String']['input']>
    /** Belongings and attachments of the object */
    objectBelongings?: InputMaybe<Scalars['String']['input']>
    /** Brand of the object */
    objectBrand?: InputMaybe<Scalars['String']['input']>
    /** License plate number of the object */
    objectLicensePlateNumber?: InputMaybe<Scalars['String']['input']>
    /** Specifies amount of kilometers or hours that object has used */
    objectTotalUsage?: InputMaybe<Scalars['Int']['input']>
    /** Type of the object */
    objectType?: InputMaybe<Scalars['String']['input']>
    /** Specifies whether object is new or used */
    objectUsed?: InputMaybe<Scalars['Boolean']['input']>
    /** Construction date of the object, optional when using monthlyBudget */
    objectYear?: InputMaybe<Scalars['Int']['input']>
    /** Specifies when the planned date when the lease will start */
    plannedStartOn?: InputMaybe<Scalars['Date']['input']>
    /** Amount that customer could pay to transfer ownership of object, only applicable with operational leases, optional when using monthlyBudget */
    purchaseOption?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the object will be bought for, optional when using monthlyBudget */
    purchasePrice?: InputMaybe<Scalars['Currency']['input']>
    /** Amount of objects */
    quantity: Scalars['Int']['input']
    /** Specifies the type of suggestion which is automatically applied */
    suggestionType?: InputMaybe<LeaseSuggestedTypeEnum>
    /** Tenor of the lease in months, optional when using monthlyBudget */
    tenor?: InputMaybe<Scalars['Int']['input']>
    /** Value of the object traded in at the vendor. */
    tradeInToVendor?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the type of financing, preferred argument over use operational or withSale arguments */
    typeOfFinance?: InputMaybe<TypeOfFinanceEnum>
    /** Specifies whether up-front VAT should be financed in a short-term loan */
    vatFinancingEnabled?: InputMaybe<Scalars['Boolean']['input']>
    /** Specifies the vendor by CoC-number where the object will be bought */
    vendorOrganizationCoc?: InputMaybe<Scalars['String']['input']>
    /** Specifies whether object will be rented out to others */
    withRentOut?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * This are the arguments to create a lease.
 *
 * When you create a lease we always need to know to which deal the lease
 * belongs. You can provide this information in several ways:
 *   1. By creating the lease together with the deal
 *   2. By providing a dealId, this is mostly used by intermediaries
 *
 * When you create a lease you also need to supply the lease components
 * these can be provided in several ways:
 *   1. By specifying individual components e.g. tenor, purchasePrice, downPayment, balloonPayment
 *   2. By specifying a monthlyBudget, we will calculate the components based on the given budget
 *   3. By specifying a monthlyBudget together with individual components, we will calculate the components based
 *      on the given budget where the given components are fixed
 *
 */
export type CreateLeaseInput = {
    /** Specifies the advertisement url */
    advertisingUrl?: InputMaybe<Scalars['String']['input']>
    /** Amount that customer pays when transferring ownership of object, optional when using monthlyBudget */
    balloonPayment?: InputMaybe<Scalars['Currency']['input']>
    /** ID of the object on the Beezaar marketplace */
    beezaarObjectId?: InputMaybe<Scalars['ID']['input']>
    /** ID of the category to which the object belongs */
    categoryId: Scalars['ID']['input']
    /** Specifies the custom interest percentage the intermediary wants to use for this deal */
    customInterestPercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Specifies whether object has a track and trace system */
    customTrackAndTraceRequired?: InputMaybe<Scalars['Boolean']['input']>
    /** ID of the deal to create the lease for, only required when creating the lease separate from the deal e.g. in a separate mutation */
    dealId?: InputMaybe<Scalars['ID']['input']>
    /** Amount that customer pays up-front when the object is bought, optional when using monthlyBudget */
    downPayment?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer pays up-front to the vender when the object is bought. */
    downPaymentToVendor?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies whether intermediary wants to receive a fee */
    intermediaryFeeEnabledByIntermediary?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies the desired fee as percentage of object for intermediary */
    intermediaryFeePercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Amount that the object is worth, purchasePrice is used as default, can be overwritten with good reason */
    marketValue?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer is willing to pay per month for object, will be used to calculate purchasePrice */
    monthlyBudget?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the estimated amount of kilometers or hours that object will be used every year */
    objectAnnualUsage?: InputMaybe<Scalars['Int']['input']>
    /** Axle configuration for the object */
    objectAxleConfiguration?: InputMaybe<Scalars['String']['input']>
    /** Belongings and attachments of the object */
    objectBelongings?: InputMaybe<Scalars['String']['input']>
    /** Brand of the object */
    objectBrand?: InputMaybe<Scalars['String']['input']>
    /** License plate number of the object */
    objectLicensePlateNumber?: InputMaybe<Scalars['String']['input']>
    /** Specifies amount of kilometers or hours that object has used */
    objectTotalUsage?: InputMaybe<Scalars['Int']['input']>
    /** Type of the object */
    objectType?: InputMaybe<Scalars['String']['input']>
    /** Specifies whether object is new or used */
    objectUsed?: InputMaybe<Scalars['Boolean']['input']>
    /** Construction date of the object, optional when using monthlyBudget */
    objectYear?: InputMaybe<Scalars['Int']['input']>
    /** Specifies when the planned date when the lease will start */
    plannedStartOn?: InputMaybe<Scalars['Date']['input']>
    /** Amount that customer could pay to transfer ownership of object, only applicable with operational leases, optional when using monthlyBudget */
    purchaseOption?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the object will be bought for, optional when using monthlyBudget */
    purchasePrice?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the type of suggestion which is automatically applied */
    suggestionType?: InputMaybe<LeaseSuggestedTypeEnum>
    /** Tenor of the lease in months, optional when using monthlyBudget */
    tenor?: InputMaybe<Scalars['Int']['input']>
    /** Value of the object traded in at the vendor. */
    tradeInToVendor?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the type of financing, preferred argument over use operational or withSale arguments */
    typeOfFinance?: InputMaybe<TypeOfFinanceEnum>
    /** Specifies whether up-front VAT should be financed in a short-term loan */
    vatFinancingEnabled?: InputMaybe<Scalars['Boolean']['input']>
    /** Specifies the vendor by CoC-number where the object will be bought */
    vendorOrganizationCoc?: InputMaybe<Scalars['String']['input']>
    /** Specifies whether object will be rented out to others */
    withRentOut?: InputMaybe<Scalars['Boolean']['input']>
}

/** Properties for signing up as an intermediary */
export type CreatePublicIntermediaryInput = {
    cocNumber?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
}

export type CreateUboStatementInput = {
    dealId: Scalars['ID']['input']
}

export enum CreditInvoiceTypeEnum {
    Activation = 'activation',
    ChangeCollectionDay = 'change_collection_day',
    ChangeLessee = 'change_lessee',
    EarlyBuyout = 'early_buyout',
    IncreasedFirstAnnuity = 'increased_first_annuity',
    KvoDepot = 'kvo_depot',
    MissedInterest = 'missed_interest',
    MonthlyAnnuityTerm = 'monthly_annuity_term',
    PurchaseOption = 'purchase_option',
    Renewal = 'renewal',
    Unknown = 'unknown',
    UpfrontVat = 'upfront_vat',
}

/** Properties for requesting a customer deal */
export type CustomerRequestDealInput = {
    comments?: InputMaybe<Scalars['String']['input']>
    dealId: Scalars['ID']['input']
}

/** Properties for requesting a customer deal */
export type CustomerRequestStartedDealInput = {
    comments?: InputMaybe<Scalars['String']['input']>
    contactPersonEmail?: InputMaybe<Scalars['String']['input']>
    contactPersonName?: InputMaybe<Scalars['String']['input']>
    contactPersonPhone?: InputMaybe<Scalars['String']['input']>
    dealId: Scalars['ID']['input']
    token: Scalars['String']['input']
}

/** Valid Deal fields to aggregate on */
export enum DealAggregationFieldEnum {
    CreatedAt = 'created_at',
    CustomerOfficer = 'customer_officer',
    CustomerSegment = 'customer_segment',
    CustomerUserId = 'customer_user_id',
    ExternalSource = 'external_source',
    FirstPaymentStatus = 'first_payment_status',
    InLifeState = 'in_life_state',
    IndicationSentAt = 'indication_sent_at',
    IntermediaryId = 'intermediary_id',
    IntermediaryState = 'intermediary_state',
    IntermediaryType = 'intermediary_type',
    IntermediaryUserId = 'intermediary_user_id',
    LaneType = 'lane_type',
    LastEventAt = 'last_event_at',
    LeaseEarlyBuyoutProposalExpiresOn = 'lease_early_buyout_proposal_expires_on',
    LeaseEndOfLifeStates = 'lease_end_of_life_states',
    LeaseInLifeStates = 'lease_in_life_states',
    LeaseOfficer = 'lease_officer',
    LeasePaidOffAt = 'lease_paid_off_at',
    LeasePlannedEndOn = 'lease_planned_end_on',
    LeaseStates = 'lease_states',
    MonthlyBudget = 'monthly_budget',
    SalesOfficer = 'sales_officer',
    State = 'state',
    Team = 'team',
    TypeOfFinanceTypes = 'type_of_finance_types',
    WorkflowType = 'workflow_type',
}

/** Filter options for aggregations on deals */
export type DealAggregationFilterInput = {
    /** Filter aggregations on given fields */
    fields: Array<DealAggregationFieldEnum>
}

export type DealContactPersonInput = {
    email?: InputMaybe<Scalars['String']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    phone?: InputMaybe<Scalars['String']['input']>
}

/** Valid external sources */
export enum DealExternalSourceEnum {
    Beedirect = 'beedirect',
    Beeport = 'beeport',
    Beezaar = 'beezaar',
    My = 'my',
    PublicApi = 'public_api',
    Widget = 'widget',
}

/** Filter options for deal */
export type DealFilterInput = {
    /** Filter deals on given customer organization(s) */
    customerOrganizationIds?: InputMaybe<Array<Scalars['ID']['input']>>
    /** Filter deals on given external source(s) */
    externalSources?: InputMaybe<Array<DealExternalSourceEnum>>
    /** Filter deals on given intermediary state(s) */
    intermediaryStates?: InputMaybe<Array<IntermediaryDealStateEnum>>
    /** Filter deals the given intermediary users */
    intermediaryUserIds?: InputMaybe<Array<Scalars['ID']['input']>>
    /** Reject deals on given intermediary state(s) */
    rejectIntermediaryStates?: InputMaybe<Array<IntermediaryDealStateEnum>>
    /** Filter deals on given state(s) */
    states?: InputMaybe<Array<DealStatesEnum>>
}

/** Deal order direction fields */
export enum DealOrderDirectionEnum {
    Asc = 'asc',
    Desc = 'desc',
}

/** Deal order fields */
export enum DealOrderFieldEnum {
    LastEventAt = 'last_event_at',
    LeaseActualEndOn = 'lease_actual_end_on',
    LeaseActualStartOn = 'lease_actual_start_on',
    LeasePlannedEndOn = 'lease_planned_end_on',
    LeasePlannedStartOn = 'lease_planned_start_on',
}

/** Deal order type */
export type DealOrderInput = {
    /** Sorteringwijze */
    direction: DealOrderDirectionEnum
    /** Sorteringveld voor deal */
    field: DealOrderFieldEnum
}

/** Deal signing state */
export enum DealSigningStateEnum {
    Expired = 'expired',
    Generating = 'generating',
    GeneratingFailed = 'generating_failed',
    Pending = 'pending',
    Provided = 'provided',
    Rejected = 'rejected',
    SignatoryChoice = 'signatory_choice',
    Signed = 'signed',
    Unready = 'unready',
}

/** Deal signing type */
export enum DealSigningTypeEnum {
    Digital = 'digital',
    Manual = 'manual',
}

/** Deal states */
export enum DealStatesEnum {
    BoughtOffEarly = 'bought_off_early',
    Calculation = 'calculation',
    Cancelled = 'cancelled',
    Completed = 'completed',
    Complied = 'complied',
    CompliedSoft4leaseExported = 'complied_soft4lease_exported',
    ConditionallyCompleted = 'conditionally_completed',
    ContractSent = 'contract_sent',
    Dissolved = 'dissolved',
    DissolvementRequested = 'dissolvement_requested',
    DossierCompleted = 'dossier_completed',
    EarlyBuyoutApproved = 'early_buyout_approved',
    EarlyBuyoutPrepared = 'early_buyout_prepared',
    EarlyBuyoutSent = 'early_buyout_sent',
    HardKycApproved = 'hard_kyc_approved',
    HardKycComplete = 'hard_kyc_complete',
    IncompletelyRequested = 'incompletely_requested',
    LesseeChangePrepared = 'lessee_change_prepared',
    LesseeChanged = 'lessee_changed',
    LgdApproved = 'lgd_approved',
    PaidOff = 'paid_off',
    PayoutPrepared = 'payout_prepared',
    PdApproved = 'pd_approved',
    PdApprovedSoftKycComplete = 'pd_approved_soft_kyc_complete',
    PdFinancialsNeeded = 'pd_financials_needed',
    PdFinancialsNeededSoftKycComplete = 'pd_financials_needed_soft_kyc_complete',
    PendingRejection = 'pending_rejection',
    Prospect = 'prospect',
    QuoteApproved = 'quote_approved',
    QuoteApprovedLegalRequired = 'quote_approved_legal_required',
    QuoteComplete = 'quote_complete',
    Rejected = 'rejected',
    Renewed = 'renewed',
    RenewedOrPaidOff = 'renewed_or_paid_off',
    RequestStarted = 'request_started',
    Requested = 'requested',
    SignedContractApproved = 'signed_contract_approved',
    SignedContractCompleted = 'signed_contract_completed',
    SignedContractReceived = 'signed_contract_received',
    Soft4leaseExported = 'soft4lease_exported',
    SoftKycComplete = 'soft_kyc_complete',
}

/** Properties for delete individual or all files of an attachment */
export type DeleteAttachmentInput = {
    filename?: InputMaybe<Scalars['String']['input']>
    /** Authentication token of an Attachment */
    token: Scalars['String']['input']
}

export type DownloadAnnuityScheduleInput = {
    /** ID of the lease */
    leaseId: Scalars['ID']['input']
}

export type DownloadVatAnnuityScheduleInput = {
    /** ID of the lease */
    leaseId: Scalars['ID']['input']
}

export type DownloadYearlyOverviewInput = {
    /** ID of the organization */
    organizationId: Scalars['ID']['input']
    year: Scalars['Int']['input']
}

/** Valid colors for EIF */
export enum EifTrafficLightEnum {
    Green = 'green',
    Red = 'red',
}

/** Properties for signing up as an intermediary */
export type FindOrCreateIntermediaryInput = {
    cocNumber?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
}

export type GenerateCreditInvoiceDocumentInput = {
    creditInvoiceId: Scalars['ID']['input']
    organizationId: Scalars['ID']['input']
}

export type GenerateSalesInvoiceDocumentInput = {
    organizationId: Scalars['ID']['input']
    salesInvoiceId: Scalars['ID']['input']
}

export type GenerateUboStatementFormDossierInput = {
    token: Scalars['String']['input']
}

/** Valid options to persist the authentication of the user */
export enum GraphqlAuthenticationPersistenceTypeEnum {
    /** Persist the authentication by receiving a JWT to pass in the Authorization header */
    JwtToken = 'jwt_token',
    /** Persist the authentication by receiving a cookie */
    SessionCookie = 'session_cookie',
}

/** Valid options for the scope to notify about the persisted authentication in the cookies */
export enum GraphqlAuthenticationSessionScopeEnum {
    Beeport = 'beeport',
    Customer = 'customer',
}

/** Valid states for iDEAL payments */
export enum IdealPaymentStateEnum {
    Canceled = 'canceled',
    Deactivated = 'deactivated',
    Error = 'error',
    Expired = 'expired',
    Failed = 'failed',
    New = 'new',
    Paid = 'paid',
    Requested = 'requested',
}

/** Properties commenting on a deal */
export type IntermediaryCommentDealInput = {
    comments?: InputMaybe<Scalars['String']['input']>
    dealId: Scalars['ID']['input']
}

/** Valid intermediary states */
export enum IntermediaryDealStateEnum {
    Cancelled = 'cancelled',
    Completed = 'completed',
    ContractSent = 'contract_sent',
    ContractSigned = 'contract_signed',
    Dissolved = 'dissolved',
    Prospect = 'prospect',
    Rejected = 'rejected',
    RequestStarted = 'request_started',
    Requested = 'requested',
    SignedContractApproved = 'signed_contract_approved',
}

/** Properties for updating the intermediary fee percentage */
export type IntermediaryFeePercentageByIntermediaryInput = {
    dealId: Scalars['ID']['input']
    intermediaryFeeEnabledByIntermediary: Scalars['Boolean']['input']
    intermediaryFeePercentageByIntermediary: Scalars['Float']['input']
}

/** Properties for requesting a deal */
export type IntermediaryRequestDealInput = {
    comments?: InputMaybe<Scalars['String']['input']>
    contactPersonEmail?: InputMaybe<Scalars['String']['input']>
    contactPersonName?: InputMaybe<Scalars['String']['input']>
    contactPersonPhone?: InputMaybe<Scalars['String']['input']>
    dealId: Scalars['ID']['input']
}

/** Properties for requesting a deal */
export type IntermediaryRequestStartedDealInput = {
    comments?: InputMaybe<Scalars['String']['input']>
    dealId: Scalars['ID']['input']
}

/** Properties for undoing a started request on a deal */
export type IntermediaryUndoRequestStartedDealInput = {
    dealId: Scalars['ID']['input']
}

/** Properties for updating a contact of a deal */
export type IntermediaryUpdateDealContactInput = {
    allowContactByBeequipBeforeRequested?: InputMaybe<
        Scalars['Boolean']['input']
    >
    contactPersonEmail?: InputMaybe<Scalars['String']['input']>
    contactPersonName?: InputMaybe<Scalars['String']['input']>
    contactPersonPhone?: InputMaybe<Scalars['String']['input']>
    id: Scalars['ID']['input']
}

/** Invoice item type */
export enum InvoiceItemTypeEnum {
    Deposit = 'deposit',
    DownPayment = 'down_payment',
    HandlingFee = 'handling_fee',
    Installment = 'installment',
    Other = 'other',
    UpfrontVat = 'upfront_vat',
}

/** States of invoices */
export enum InvoiceStateEnum {
    New = 'new',
    Paid = 'paid',
    PartiallyPaid = 'partially_paid',
}

export type LeaseBoundariesInput = {
    /** Amount that customer pays when transferring ownership of object, optional when using monthlyBudget */
    balloonPayment?: InputMaybe<Scalars['Currency']['input']>
    /** ID of the category to which the object belongs */
    categoryId?: InputMaybe<Scalars['ID']['input']>
    /** ID of the deal, used to scope the leaseId as intermediary or customer user */
    dealId?: InputMaybe<Scalars['ID']['input']>
    /** Amount that customer pays up-front when the object is bought, optional when using monthlyBudget */
    downPayment?: InputMaybe<Scalars['Currency']['input']>
    /** Token of the intermediary, used to apply intermediary settings */
    intermediaryToken?: InputMaybe<Scalars['String']['input']>
    /** ID of the lease to base the boundaries on, only required when using an existing lease */
    leaseId?: InputMaybe<Scalars['ID']['input']>
    /** Amount that the object is wort, purchasePrice is used as default, can be overwritten with good reason */
    marketValue?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer is willing to pay per month for object, will be used to calculate purchasePrice */
    monthlyBudget?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies whether object is new or used */
    objectUsed?: InputMaybe<Scalars['Boolean']['input']>
    /** Construction date of the object */
    objectYear?: InputMaybe<Scalars['Int']['input']>
    /** Specifies when the planned date when the lease will start */
    plannedStartOn?: InputMaybe<Scalars['Date']['input']>
    /** Amount that customer could pay to transfer ownership of object, only applicable with operational leases, optional when using monthlyBudget */
    purchaseOption?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the object will be bought for, optional when using monthlyBudget */
    purchasePrice?: InputMaybe<Scalars['Currency']['input']>
    /** Tenor of the lease in months, optional when using monthlyBudget */
    tenor?: InputMaybe<Scalars['Int']['input']>
    /** Token of the deal, used to scope the leaseId as anonymous user */
    token?: InputMaybe<Scalars['String']['input']>
    /** Specifies the type of financing, preferred argument over use operational or withSale arguments */
    typeOfFinance?: InputMaybe<TypeOfFinanceEnum>
}

/** Filter options for leases */
export type LeaseFilterInput = {
    customerOrganizationIds?: InputMaybe<Array<Scalars['ID']['input']>>
    states?: InputMaybe<Array<LeaseStatesEnum>>
}

/** Lease order fields */
export enum LeaseOrderFieldEnum {
    PaidOutAt = 'paid_out_at',
    Reference = 'reference',
}

/** Lease order type */
export type LeaseOrderInput = {
    direction: DealOrderDirectionEnum
    field: LeaseOrderFieldEnum
}

/** Lease states */
export enum LeaseStatesEnum {
    BoughtOffEarly = 'bought_off_early',
    Cancelled = 'cancelled',
    Completed = 'completed',
    Complied = 'complied',
    CompliedSoft4leaseExported = 'complied_soft4lease_exported',
    ConditionallyCompleted = 'conditionally_completed',
    ContractSent = 'contract_sent',
    Dissolved = 'dissolved',
    DissolvementRequested = 'dissolvement_requested',
    DossierCompleted = 'dossier_completed',
    EarlyBuyoutApproved = 'early_buyout_approved',
    EarlyBuyoutPrepared = 'early_buyout_prepared',
    EarlyBuyoutSent = 'early_buyout_sent',
    LesseeChangePrepared = 'lessee_change_prepared',
    LesseeChanged = 'lessee_changed',
    PaidOff = 'paid_off',
    PayoutPrepared = 'payout_prepared',
    Processing = 'processing',
    Rejected = 'rejected',
    Renewed = 'renewed',
    SignedContractApproved = 'signed_contract_approved',
    SignedContractCompleted = 'signed_contract_completed',
    SignedContractReceived = 'signed_contract_received',
    Soft4leaseExported = 'soft4lease_exported',
}

/** Valid types suggested lease calculations */
export enum LeaseSuggestedTypeEnum {
    EifFl = 'eif_fl',
    HighPurchasePrice = 'high_purchase_price',
    LowPrice = 'low_price',
    LowTenor = 'low_tenor',
    Optimal = 'optimal',
}

export type MarkNotificationReadInput = {
    id: Scalars['ID']['input']
}

export type MarketingOptions = {
    expectedLeadTimeline?: InputMaybe<Scalars['String']['input']>
    gclId?: InputMaybe<Scalars['String']['input']>
    gtmContainerId?: InputMaybe<Scalars['String']['input']>
    referralLink?: InputMaybe<Scalars['String']['input']>
}

/** Valid types for notification events */
export enum NotificationEventTypeEnum {
    AttachmentNewFilesAdded = 'AttachmentNewFilesAdded',
    BankCreditAnalysisDossierCompleted = 'BankCreditAnalysisDossierCompleted',
    BankCreditAnalysisDossierRequested = 'BankCreditAnalysisDossierRequested',
    BankTransactionDossierRequested = 'BankTransactionDossierRequested',
    CollectionMandateGiven = 'CollectionMandateGiven',
    CollectionMandateRequested = 'CollectionMandateRequested',
    ConditionallyCompletedOverdue = 'ConditionallyCompletedOverdue',
    ContractSent = 'ContractSent',
    EarlyBuyoutPaymentPaid = 'EarlyBuyoutPaymentPaid',
    ExternalSourceDealCreated = 'ExternalSourceDealCreated',
    FirstPaymentPaid = 'FirstPaymentPaid',
    FirstPaymentRequested = 'FirstPaymentRequested',
    InactiveBeespecialDealFound = 'InactiveBeespecialDealFound',
    InactiveDealsSpotted = 'InactiveDealsSpotted',
    IncompleteComplianceReminderSent = 'IncompleteComplianceReminderSent',
    InvoiceAttachmentCancelled = 'InvoiceAttachmentCancelled',
    LeasesPaidOut = 'LeasesPaidOut',
    OrganizationCreditChanged = 'OrganizationCreditChanged',
    OrganizationCreditRefreshFailed = 'OrganizationCreditRefreshFailed',
    OrganizationStructureChanged = 'OrganizationStructureChanged',
    QuoteApproved = 'QuoteApproved',
    ReadyForCompleteDossier = 'ReadyForCompleteDossier',
}

/** Order types */
export enum OrderEnum {
    NewestFirst = 'newest_first',
    OldestFirst = 'oldest_first',
}

/** Filter options for organization */
export type OrganizationFilterInput = {
    /** Filter deals on given state(s) */
    dealStates?: InputMaybe<Array<DealStatesEnum>>
}

export type OrganizationInvoicesInput = {
    organizationId: Scalars['ID']['input']
}

export enum OrganizationKindEnum {
    Association = 'association',
    CivilLawPartnershipFirm = 'civil_law_partnership_firm',
    Foundation = 'foundation',
    LimitedCompany = 'limited_company',
    LimitedPartnershipFirm = 'limited_partnership_firm',
    PartnershipFirm = 'partnership_firm',
    PrivateLimitedCompany = 'private_limited_company',
    SoleTraderCompany = 'sole_trader_company',
    Unknown = 'unknown',
}

/** Valid types for PaymentItems */
export enum PaymentItemTypeEnum {
    Custom = 'custom',
    DownPayment = 'down_payment',
    EarlyBuyout = 'early_buyout',
    FirstAnnuity = 'first_annuity',
    HandlingFee = 'handling_fee',
    KvoDepot = 'kvo_depot',
    UpfrontVat = 'upfront_vat',
    VatFinancingFee = 'vat_financing_fee',
    VatFinancingFirstAnnuity = 'vat_financing_first_annuity',
}

/** Valid states for payments */
export enum PaymentStateEnum {
    Failed = 'failed',
    New = 'new',
    Paid = 'paid',
    PartiallyPaid = 'partially_paid',
}

/** Valid types for payments */
export enum PaymentTypeEnum {
    Custom = 'custom',
    EarlyBuyout = 'early_buyout',
    Fake = 'fake',
    First = 'first',
}

export type PostCalculationBoundariesInput = {
    /** Amount that the intermediary can contribute to the lease to lower the interest for the customer */
    customIntermediaryFixedContribution?: InputMaybe<
        Scalars['Currency']['input']
    >
    /** Target interest percentage that intermediary can request, by contributing to the lease to compensate for the lower interest rate */
    customIntermediaryTargetInterestPercentage?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Token of the intermediary, used to apply intermediary settings */
    intermediaryToken?: InputMaybe<Scalars['String']['input']>
    /** ID of the lease to base the boundaries on */
    leaseId: Scalars['ID']['input']
    /** Token of the deal, used to scope the leaseId as anonymous user */
    token?: InputMaybe<Scalars['String']['input']>
}

export type RequestAdviceInput = {
    comments?: InputMaybe<Scalars['String']['input']>
    contactPersonEmail?: InputMaybe<Scalars['String']['input']>
    contactPersonName?: InputMaybe<Scalars['String']['input']>
    contactPersonPhone?: InputMaybe<Scalars['String']['input']>
    token: Scalars['String']['input']
}

export type RequestBankConsentInput = {
    acceptedBankTransactionUsage: Scalars['Boolean']['input']
    bankBic: Scalars['String']['input']
    specifiedBankAccountNumber?: InputMaybe<Scalars['String']['input']>
    token: Scalars['String']['input']
}

export type RequestEarlyBuyoutInput = {
    dealId: Scalars['ID']['input']
    leaseIds: Array<Scalars['ID']['input']>
    reason: RequestEarlyBuyoutReasonsEnum
}

export enum RequestEarlyBuyoutReasonsEnum {
    Other = 'other',
    Quit = 'quit',
    Replace = 'replace',
    Sell = 'sell',
}

export type RequestVatFinancingEarlyBuyoutInput = {
    dealId: Scalars['ID']['input']
    leaseIds: Array<Scalars['ID']['input']>
}

export type RequestYearlyOverviewInput = {
    organizationId: Scalars['ID']['input']
    year: Scalars['Int']['input']
}

export type RevokeBankConsentInput = {
    token: Scalars['String']['input']
}

export enum SalesInvoiceTypesEnum {
    Activation = 'activation',
    ChangeCollectionDay = 'change_collection_day',
    ChangeLessee = 'change_lessee',
    EarlyBuyout = 'early_buyout',
    IncreasedFirstAnnuity = 'increased_first_annuity',
    KvoDepot = 'kvo_depot',
    MissedInterest = 'missed_interest',
    MonthlyAnnuityTerm = 'monthly_annuity_term',
    PurchaseOption = 'purchase_option',
    Renewal = 'renewal',
    Unknown = 'unknown',
    UpfrontVat = 'upfront_vat',
}

export type SendLoginLinkInput = {
    dealToken?: InputMaybe<Scalars['String']['input']>
    email: Scalars['String']['input']
    path?: InputMaybe<Scalars['String']['input']>
    userType: UserTypeEnum
}

/** Arguments to terminate the persisted authentication */
export type SignOutInput = {
    persistenceType: GraphqlAuthenticationPersistenceTypeEnum
}

/** Signatory authorization enum */
export enum SignatoryAuthorizationTypeEnum {
    Independent = 'independent',
    Joint = 'joint',
    Limited = 'limited',
    None = 'none',
    Unknown = 'unknown',
}

export enum SigningPartyRolesEnum {
    DonorLessee = 'donor_lessee',
    Guarantor = 'guarantor',
    Lessee = 'lessee',
    Surety = 'surety',
    Unknown = 'unknown',
}

export type ToggleNotificationReadInput = {
    id: Scalars['ID']['input']
}

/** Valid types of finance for a lease */
export enum TypeOfFinanceEnum {
    Financial = 'financial',
    Mortgage = 'mortgage',
    Operational = 'operational',
    SaleAndFinancialLeaseback = 'sale_and_financial_leaseback',
    SaleAndMortgageLeaseback = 'sale_and_mortgage_leaseback',
    SaleAndOperationalLeaseback = 'sale_and_operational_leaseback',
}

export enum UboStatementFormDossierKindEnum {
    PseudoUbo = 'pseudo_ubo',
    Ubo = 'ubo',
}

export enum UboStatementFormDossierStateEnum {
    Generated = 'generated',
    Open = 'open',
    Validated = 'validated',
}

/** Properties for updating a deal */
export type UpdateDealInput = {
    cocNumber?: InputMaybe<Scalars['String']['input']>
    comments?: InputMaybe<Scalars['String']['input']>
    id?: InputMaybe<Scalars['ID']['input']>
    marketingOptions?: InputMaybe<MarketingOptions>
    token?: InputMaybe<Scalars['String']['input']>
}

/** Properties for updating an intermediary */
export type UpdateIntermediaryInput = {
    logo?: InputMaybe<Scalars['Upload']['input']>
    showLogo?: InputMaybe<Scalars['Boolean']['input']>
    vendorObjectBrand?: InputMaybe<Scalars['String']['input']>
}

/** Properties for updating the last used Beeport version of a user */
export type UpdateLastUsedBeeportVersionInput = {
    /** The semantic version number of the Beeport application that should be stored in the user profile, e.g. "2.5.1" */
    lastUsedBeeportVersion: Scalars['String']['input']
}

/** Properties for updating the last used My Beequip version of a user */
export type UpdateLastUsedMyBeequipVersionInput = {
    /** The semantic version number of the My Beequip application that should be stored in the user profile, e.g. "2.5.1" */
    lastUsedMyBeequipVersion: Scalars['String']['input']
}

/** Properties for updating a lease group */
export type UpdateLeaseGroupInput = {
    /** Specifies the advertisement url */
    advertisingUrl?: InputMaybe<Scalars['String']['input']>
    /** Amount that customer pays when transferring ownership of object, optional when using monthlyBudget */
    balloonPayment?: InputMaybe<Scalars['Currency']['input']>
    /** ID of the category to which the object belongs */
    categoryId?: InputMaybe<Scalars['ID']['input']>
    /** Specifies the custom interest percentage the intermediary wants to use for this deal */
    customInterestPercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Specifies the fixed contribution the intermediary wants to make, to use intermediary contribution for this deal */
    customIntermediaryFixedContribution?: InputMaybe<
        Scalars['Currency']['input']
    >
    /** Specifies the target interest percentage the intermediary wants to use for this deal, when using intermediary contribution */
    customIntermediaryTargetInterestPercentage?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Specifies whether object has a track and trace system */
    customTrackAndTraceRequired?: InputMaybe<Scalars['Boolean']['input']>
    /** Amount that customer pays up-front when the object is bought, optional when using monthlyBudget */
    downPayment?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer pays up-front to the vender when the object is bought. */
    downPaymentToVendor?: InputMaybe<Scalars['Currency']['input']>
    /** Indicates if the external user enabled the down payment to vendor */
    downPaymentToVendorEnabledByExternalUser?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies whether intermediary wants to receive a fee */
    intermediaryFeeEnabledByIntermediary?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies the desired fee as percentage of object for intermediary */
    intermediaryFeePercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** ID of the lease to update */
    leaseId: Scalars['ID']['input']
    /** Amount that the object is worth, purchasePrice is used as default, can be overwritten with good reason */
    marketValue?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer is willing to pay per month for object, will be used to calculate purchasePrice */
    monthlyBudget?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the estimated amount of kilometers or hours that object will be used every year */
    objectAnnualUsage?: InputMaybe<Scalars['Int']['input']>
    /** Axle configuration for the object */
    objectAxleConfiguration?: InputMaybe<Scalars['String']['input']>
    /** Belongings and attachments of the object */
    objectBelongings?: InputMaybe<Scalars['String']['input']>
    /** Brand of the object */
    objectBrand?: InputMaybe<Scalars['String']['input']>
    /** License plate number of the object */
    objectLicensePlateNumber?: InputMaybe<Scalars['String']['input']>
    /** Specifies amount of kilometers or hours that object has used */
    objectTotalUsage?: InputMaybe<Scalars['Int']['input']>
    /** Type of the object */
    objectType?: InputMaybe<Scalars['String']['input']>
    /** Specifies whether object is new or used */
    objectUsed?: InputMaybe<Scalars['Boolean']['input']>
    /** Construction date of the object */
    objectYear?: InputMaybe<Scalars['Int']['input']>
    /** Specifies when the planned date when the lease will start */
    plannedStartOn?: InputMaybe<Scalars['Date']['input']>
    /** Specifies if the planned start date is confirmed by the external user */
    plannedStartOnConfirmedByExternalUser?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Amount that customer could pay to transfer ownership of object, only applicable with operational leases, optional when using monthlyBudget */
    purchaseOption?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the object will be bought for, optional when using monthlyBudget */
    purchasePrice?: InputMaybe<Scalars['Currency']['input']>
    /** Amount of objects */
    quantity: Scalars['Int']['input']
    /** Tenor of the lease in months, optional when using monthlyBudget */
    tenor?: InputMaybe<Scalars['Int']['input']>
    /** Token of the deal, used to scope the leaseId as anonymous user */
    token?: InputMaybe<Scalars['String']['input']>
    /** Value of the object traded in at the vendor. */
    tradeInToVendor?: InputMaybe<Scalars['Currency']['input']>
    /** Indicates if the external user enabled the trade in to vendor amount */
    tradeInToVendorEnabledByExternalUser?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies the type of financing, preferred argument over use operational or withSale arguments */
    typeOfFinance?: InputMaybe<TypeOfFinanceEnum>
    /** Specifies whether up-front VAT should be financed in a short-term loan */
    vatFinancingEnabled?: InputMaybe<Scalars['Boolean']['input']>
    /** Amount that the customer pays in vehicle tax. The amount is deducted from the purchase price for VAT calculations. (Dutch: bpm) */
    vehiclePurchaseTax?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the vendor by CoC-number where the object will be bought */
    vendorOrganizationCoc?: InputMaybe<Scalars['String']['input']>
    /** Specifies whether object will be rented out to others */
    withRentOut?: InputMaybe<Scalars['Boolean']['input']>
}

/**
 * These are the arguments for updating a lease.
 *
 * We perform partial updates, so this means that not all arguments
 * are required. You only need to specify the changes.
 *
 * When you update a lease we always need to know which lease
 * you want to update. You can do this in two ways:
 *   1. By specifying the leaseId, this is mostly used by intermediaries and customers
 *   2. By specifying the token of the deal and the leaseId, this is mostly used by anonymous users
 *
 */
export type UpdateLeaseInput = {
    /** Specifies the advertisement url */
    advertisingUrl?: InputMaybe<Scalars['String']['input']>
    /** Amount that customer pays when transferring ownership of object, optional when using monthlyBudget */
    balloonPayment?: InputMaybe<Scalars['Currency']['input']>
    /** ID of the category to which the object belongs */
    categoryId?: InputMaybe<Scalars['ID']['input']>
    /** Specifies the custom interest percentage the intermediary wants to use for this deal */
    customInterestPercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Specifies the fixed contribution the intermediary wants to make, to use intermediary contribution for this deal */
    customIntermediaryFixedContribution?: InputMaybe<
        Scalars['Currency']['input']
    >
    /** Specifies the target interest percentage the intermediary wants to use for this deal, when using intermediary contribution */
    customIntermediaryTargetInterestPercentage?: InputMaybe<
        Scalars['Float']['input']
    >
    /** Specifies whether object has a track and trace system */
    customTrackAndTraceRequired?: InputMaybe<Scalars['Boolean']['input']>
    /** Amount that customer pays up-front when the object is bought, optional when using monthlyBudget */
    downPayment?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer pays up-front to the vender when the object is bought. */
    downPaymentToVendor?: InputMaybe<Scalars['Currency']['input']>
    /** Indicates if the external user enabled the down payment to vendor */
    downPaymentToVendorEnabledByExternalUser?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies whether intermediary wants to receive a fee */
    intermediaryFeeEnabledByIntermediary?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies the desired fee as percentage of object for intermediary */
    intermediaryFeePercentageByIntermediary?: InputMaybe<
        Scalars['Float']['input']
    >
    /** ID of the lease to update */
    leaseId: Scalars['ID']['input']
    /** Amount that the object is worth, purchasePrice is used as default, can be overwritten with good reason */
    marketValue?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the customer is willing to pay per month for object, will be used to calculate purchasePrice */
    monthlyBudget?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the estimated amount of kilometers or hours that object will be used every year */
    objectAnnualUsage?: InputMaybe<Scalars['Int']['input']>
    /** Axle configuration for the object */
    objectAxleConfiguration?: InputMaybe<Scalars['String']['input']>
    /** Belongings and attachments of the object */
    objectBelongings?: InputMaybe<Scalars['String']['input']>
    /** Brand of the object */
    objectBrand?: InputMaybe<Scalars['String']['input']>
    /** License plate number of the object */
    objectLicensePlateNumber?: InputMaybe<Scalars['String']['input']>
    /** Specifies amount of kilometers or hours that object has used */
    objectTotalUsage?: InputMaybe<Scalars['Int']['input']>
    /** Type of the object */
    objectType?: InputMaybe<Scalars['String']['input']>
    /** Specifies whether object is new or used */
    objectUsed?: InputMaybe<Scalars['Boolean']['input']>
    /** Construction date of the object */
    objectYear?: InputMaybe<Scalars['Int']['input']>
    /** Specifies when the planned date when the lease will start */
    plannedStartOn?: InputMaybe<Scalars['Date']['input']>
    /** Specifies if the planned start date is confirmed by the external user */
    plannedStartOnConfirmedByExternalUser?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Amount that customer could pay to transfer ownership of object, only applicable with operational leases, optional when using monthlyBudget */
    purchaseOption?: InputMaybe<Scalars['Currency']['input']>
    /** Amount that the object will be bought for, optional when using monthlyBudget */
    purchasePrice?: InputMaybe<Scalars['Currency']['input']>
    /** Tenor of the lease in months, optional when using monthlyBudget */
    tenor?: InputMaybe<Scalars['Int']['input']>
    /** Token of the deal, used to scope the leaseId as anonymous user */
    token?: InputMaybe<Scalars['String']['input']>
    /** Value of the object traded in at the vendor. */
    tradeInToVendor?: InputMaybe<Scalars['Currency']['input']>
    /** Indicates if the external user enabled the trade in to vendor amount */
    tradeInToVendorEnabledByExternalUser?: InputMaybe<
        Scalars['Boolean']['input']
    >
    /** Specifies the type of financing, preferred argument over use operational or withSale arguments */
    typeOfFinance?: InputMaybe<TypeOfFinanceEnum>
    /** Specifies whether up-front VAT should be financed in a short-term loan */
    vatFinancingEnabled?: InputMaybe<Scalars['Boolean']['input']>
    /** Amount that the customer pays in vehicle tax. The amount is deducted from the purchase price for VAT calculations. (Dutch: bpm) */
    vehiclePurchaseTax?: InputMaybe<Scalars['Currency']['input']>
    /** Specifies the vendor by CoC-number where the object will be bought */
    vendorOrganizationCoc?: InputMaybe<Scalars['String']['input']>
    /** Specifies whether object will be rented out to others */
    withRentOut?: InputMaybe<Scalars['Boolean']['input']>
}

/** Properties for updating an organization */
export type UpdateOrganizationInput = {
    customRequireUboStatement?: InputMaybe<Scalars['Boolean']['input']>
    id: Scalars['ID']['input']
    invoiceEmail?: InputMaybe<Scalars['String']['input']>
}

export type UpdatePlannedStartOnInput = {
    dealId: Scalars['ID']['input']
    leases: Array<UpdatePlannedStartOnLeaseInput>
}

export type UpdatePlannedStartOnLeaseInput = {
    id: Scalars['ID']['input']
    plannedStartOn: Scalars['Date']['input']
    plannedStartOnConfirmedByExternalUser: Scalars['Boolean']['input']
}

export type UpdateSignatoryChoiceInput = {
    signingPersonIds: Array<Scalars['ID']['input']>
    token: Scalars['String']['input']
}

export type UpdateUboStatementFormDossierInput = {
    kind?: InputMaybe<UboStatementFormDossierKindEnum>
    numberOfShareholders?: InputMaybe<Scalars['Int']['input']>
    people?: InputMaybe<Array<UpdateUboStatementFormPersonInput>>
    token: Scalars['String']['input']
}

export type UpdateUboStatementFormPersonInput = {
    address?: InputMaybe<Scalars['String']['input']>
    city?: InputMaybe<Scalars['String']['input']>
    country?: InputMaybe<CountryCodeEnum>
    dateOfBirth?: InputMaybe<Scalars['String']['input']>
    firstName?: InputMaybe<Scalars['String']['input']>
    functionTitle?: InputMaybe<Scalars['String']['input']>
    id?: InputMaybe<Scalars['ID']['input']>
    lastName?: InputMaybe<Scalars['String']['input']>
    nationality?: InputMaybe<CountryCodeEnum>
    number?: InputMaybe<Scalars['Int']['input']>
    postalCode?: InputMaybe<Scalars['String']['input']>
    sharesPercentage?: InputMaybe<Scalars['Float']['input']>
    votingRightsPercentage?: InputMaybe<Scalars['Float']['input']>
}

/** Properties for updating a user */
export type UpdateUserInput = {
    disableNotificationEvents?: InputMaybe<Array<NotificationEventTypeEnum>>
    enableNotificationEvents?: InputMaybe<Array<NotificationEventTypeEnum>>
    name: Scalars['String']['input']
    phone: Scalars['String']['input']
    receiveNotifications?: InputMaybe<Scalars['Boolean']['input']>
}

/** Properties for uploading files to an additional attachment */
export type UploadAdditionalAttachmentInput = {
    files: Array<Scalars['Upload']['input']>
    name?: InputMaybe<Scalars['String']['input']>
    source: UploadAttachmentSourceEnum
    /** Authentication token of a Deal */
    token: Scalars['String']['input']
}

/** Properties for uploading files to an attachment */
export type UploadAttachmentInput = {
    files: Array<Scalars['Upload']['input']>
    source: UploadAttachmentSourceEnum
    /** Authentication token of an Attachment */
    token: Scalars['String']['input']
}

/** Valid sources for uploading an attachment */
export enum UploadAttachmentSourceEnum {
    Beeport = 'beeport',
    My = 'my',
}

/** Types of user in the schema */
export enum UserTypeEnum {
    Customer = 'customer',
    Intermediary = 'intermediary',
}

export type ValidateUboStatementFormDossierInput = {
    token: Scalars['String']['input']
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = {
    __typename?: 'Query'
    categoryGroups: Array<{
        __typename?: 'CategoryGroup'
        id: string
        name: string
        categories: Array<{ __typename?: 'Category'; id: string; name: string }>
    }>
}

export const CategoriesDocument = gql`
    query Categories {
        categoryGroups {
            id
            name
            categories {
                id
                name
            }
        }
    }
`

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(
    baseOptions?: Apollo.QueryHookOptions<
        CategoriesQuery,
        CategoriesQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
        CategoriesDocument,
        options
    )
}
export function useCategoriesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        CategoriesQuery,
        CategoriesQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
        CategoriesDocument,
        options
    )
}
export function useCategoriesSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        CategoriesQuery,
        CategoriesQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(
        CategoriesDocument,
        options
    )
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>
export type CategoriesLazyQueryHookResult = ReturnType<
    typeof useCategoriesLazyQuery
>
export type CategoriesSuspenseQueryHookResult = ReturnType<
    typeof useCategoriesSuspenseQuery
>
export type CategoriesQueryResult = Apollo.QueryResult<
    CategoriesQuery,
    CategoriesQueryVariables
>
