{
  /**
   * General configuration of Orthanc
   **/

  // The logical name of this instance of Orthanc. This one is
  // displayed in Orthanc Explorer and at the URI "/system".
  "Name" : "Orthanc",

  // Path to the directory that holds the heavyweight files
  // (i.e. the raw DICOM instances)
  "StorageDirectory" : "OrthancStorage",

  // Path to the directory that holds the SQLite index (if unset,
  // the value of StorageDirectory is used). This index could be
  // stored on a RAM-drive or a SSD device for performance reasons.
  "IndexDirectory" : "OrthancStorage",

  // Enable the transparent compression of the DICOM instances
  "StorageCompression" : false,

  // Maximum size of the storage in MB (a value of "0" indicates no
  // limit on the storage size)
  "MaximumStorageSize" : 0,

  // Maximum number of patients that can be stored at a given time
  // in the storage (a value of "0" indicates no limit on the number
  // of patients)
  "MaximumPatientCount" : 0,
  
  // List of paths to the custom Lua scripts that are to be loaded
  // into this instance of Orthanc
  "LuaScripts" : [
  ],

  // List of paths to the plugins that are to be loaded into this
  // instance of Orthanc (e.g. "./libPluginTest.so" for Linux, or
  // "./PluginTest.dll" for Windows). These paths can refer to
  // folders, in which case they will be scanned non-recursively to
  // find shared libraries.
   "PostgreSQL" : {
     "EnableIndex" : true,
     "EnableStorage" : true,
     "Host" : "127.0.0.1",
     "Port" : 5432,
     "Database" : "orthanct",
     "Username" : "postgres",
     "Password" : "postgres"
   },
  "Plugins" : [
    "/opt/Orthanc/OrthancPlugins/Postgres/libOrthancPostgreSQLIndex.so",
    "/opt/Orthanc/OrthancPlugins/Postgres/libOrthancPostgreSQLStorage.so",
    "/opt/Orthanc/OrthancPlugins/OrthancDicomWeb-0.3/libOrthancDicomWeb.so",
    //"/opt/Orchanc/OrthancPlugins/OrthancDicomWeb-0.3/libOrthancDicomWeb.so", 
    "/opt/Orthanc/OrthancPlugins/OsimisViewer/libOsimisWebViewer.so",
    "/opt/Orthanc/OrthancPlugins/OrthancWSI/libOrthancWSI.so"
    // "/home/orthanc/OrthancWSI-0.4/ViewerPlugin/Build/libOrthancWSI.so"	
  ],



  /**
   * Configuration of the HTTP server
   **/

  // Enable the HTTP server. If this parameter is set to "false",
  // Orthanc acts as a pure DICOM server. The REST API and Orthanc
  // Explorer will not be available.
  "HttpServerEnabled" : true,

  // HTTP port for the REST services and for the GUI
  "HttpPort" : 8042,

  // When the following option is "true", if an error is encountered
  // while calling the REST API, a JSON message describing the error
  // is put in the HTTP answer. This feature can be disabled if the
  // HTTP client does not properly handles such answers.
  "HttpDescribeErrors" : true,

  // Enable HTTP compression to improve network bandwidth utilization,
  // at the expense of more computations on the server. Orthanc
  // supports the "gzip" and "deflate" HTTP encodings.
  "HttpCompressionEnabled" : true,



  /**
   * Configuration of the DICOM server
   **/

  // Enable the DICOM server. If this parameter is set to "false",
  // Orthanc acts as a pure REST server. It will not be possible to
  // receive files or to do query/retrieve through the DICOM protocol.
  "DicomServerEnabled" : true,

  // The DICOM Application Entity Title
  "DicomAet" : "PACS_101",

  // Check whether the called AET corresponds during a DICOM request
  "DicomCheckCalledAet" : false,

  // The DICOM port
  "DicomPort" : 4242,

  // The default encoding that is assumed for DICOM files without
  // "SpecificCharacterSet" DICOM tag, and that is used when answering
  // C-Find requests (including worklists). The allowed values are
  // "Ascii", "Utf8", "Latin1", "Latin2", "Latin3", "Latin4",
  // "Latin5", "Cyrillic", "Windows1251", "Arabic", "Greek", "Hebrew",
  // "Thai", "Japanese", and "Chinese".
  "DefaultEncoding" : "Latin1",

  // The transfer syntaxes that are accepted by Orthanc C-Store SCP
  "DeflatedTransferSyntaxAccepted"     : true,
  "JpegTransferSyntaxAccepted"         : true,
  "Jpeg2000TransferSyntaxAccepted"     : true,
  "JpegLosslessTransferSyntaxAccepted" : true,
  "JpipTransferSyntaxAccepted"         : true,
  "Mpeg2TransferSyntaxAccepted"        : true,
  "RleTransferSyntaxAccepted"          : true,

  // Whether Orthanc accepts to act as C-Store SCP for unknown storage
  // SOP classes (aka. "promiscuous mode")
  "UnknownSopClassAccepted"            : false,

  // Set the timeout (in seconds) after which the DICOM associations
  // are closed by the Orthanc SCP (server) if no further DIMSE
  // command is received from the SCU (client).
  "DicomScpTimeout" : 180,



  /**
   * Security-related options for the HTTP server
   **/

  // Whether remote hosts can connect to the HTTP server
  "RemoteAccessAllowed" : true,

  // Whether or not SSL is enabled
  "SslEnabled" : false,

  // Path to the SSL certificate in the PEM format (meaningful only if
  // SSL is enabled)
  "SslCertificate" : "certificate.pem",

  // Whether or not the password protection is enabled
  "AuthenticationEnabled" : false,

  // The list of the registered users. Because Orthanc uses HTTP
  // Basic Authentication, the passwords are stored as plain text.
  "RegisteredUsers" : {
    // "alice" : "alicePassword"
  },

  //server dicomweb
  "DicomWeb" : {
    "Enable" : true,          // Whether DICOMweb support is enabled
    "Root" : "/dicom-web/",   // Root URI of the DICOMweb API (for QIDO-RS, STOW-RS and WADO-RS)
    "EnableWado" : true,      // Whether WADO-URI (previously known as WADO) support is enabled
    "WadoRoot" : "/wado",     // Root URI of the WADO-URI (aka. WADO) API
    "Host" : "127.0.0.1",     // Hard-codes the name of the host for subsequent WADO-RS requests
    "Ssl" : false,            // Whether HTTPS should be used for subsequent WADO-RS requests
    "StowMaxInstances" : 10,  // For STOW-RS client, the maximum number of instances in one single HTTP query (0 = no limit)
    "StowMaxSize" : 10        // For STOW-RS client, the maximum size of the body in one single HTTP query (in MB, 0 = no limit)
  },

  //client dicomweb
  "DicomWeb" : {
    "Servers" : {
      "sample" : [ "http://192.168.56.1/dicom-web/" ]
    }
  },

  /**
   * Network topology
   **/

  // The list of the known DICOM modalities
  "DicomModalities" : {
    /**
     * Uncommenting the following line would enable Orthanc to
     * connect to an instance of the "storescp" open-source DICOM
     * store (shipped in the DCMTK distribution) started by the
     * command line "storescp 2000".
     **/
    "PACS103" : [ "PACS_103", "192.168.56.103", 5252]
   // "Orthanc104":["ORTHANC_104","192.168.56.104", 8042]


    /**
     * A fourth parameter is available to enable patches for a
     * specific PACS manufacturer. The allowed values are currently
     * "Generic" (default value), "StoreScp" (storescp tool from
     * DCMTK), "ClearCanvas", "MedInria", "Dcm4Chee", "SyngoVia",
     * "AgfaImpax" (Agfa IMPAX), "EFilm2" (eFilm version 2), and
     * "Vitrea". This parameter is case-sensitive.
     **/
    // "clearcanvas" : [ "CLEARCANVAS", "192.168.1.1", 104, "ClearCanvas" ]
  },

  // The timeout (in seconds) after which the DICOM associations are
  // considered as closed by the Orthanc SCU (client) if the remote
  // DICOM SCP (server) does not answer.
  "DicomScuTimeout" : 180,

  // The list of the known Orthanc peers
  "OrthancPeers" : {
    /**
     * Each line gives the base URL of an Orthanc peer, possibly
     * followed by the username/password pair (if the password
     * protection is enabled on the peer).
     **/
    // "peer"  : [ "http://127.0.0.1:8043/", "alice", "alicePassword" ]
    // "peer2" : [ "http://127.0.0.1:8044/" ]
     

    /**
     * This is another, more advanced format to define Orthanc
     * peers. It notably allows to specify a HTTPS client certificate
     * in the PEM format (as in the "--cert" option of curl), or to
     * enable PKCS#11 authentication for smart cards.
     **/
    // "peer" : {
    //   "Url" : "http://127.0.0.1:8043/",
    //   "Username" : "alice",
    //   "Password" : "alicePassword",
    //   "CertificateFile" : "client.crt",
    //   "CertificateKeyFile" : "client.key",
    //   "CertificateKeyPassword" : "certpass",
    //   "Pkcs11" : false
    // }
  },

  // Parameters of the HTTP proxy to be used by Orthanc. If set to the
  // empty string, no HTTP proxy is used. For instance:
  //   "HttpProxy" : "192.168.0.1:3128"
  //   "HttpProxy" : "proxyUser:proxyPassword@192.168.0.1:3128"
  "HttpProxy" : "",

  // Set the timeout for HTTP requests issued by Orthanc (in seconds).
  "HttpTimeout" : 180,

  // Enable the verification of the peers during HTTPS requests. This
  // option must be set to "false" if using self-signed certificates.
  // Pay attention that setting this option to "false" results in
  // security risks!
  // Reference: http://curl.haxx.se/docs/sslcerts.html
  "HttpsVerifyPeers" : true,

  // Path to the CA (certification authority) certificates to validate
  // peers in HTTPS requests. From curl documentation ("--cacert"
  // option): "Tells curl to use the specified certificate file to
  // verify the peers. The file may contain multiple CA
  // certificates. The certificate(s) must be in PEM format."
  "HttpsCACertificates" : "",



  /**
   * Advanced options
   **/

  // Dictionary of symbolic names for the user-defined metadata. Each
  // entry must map an unique string to an unique number between 1024
  // and 65535. Reserved values:
  //  - The Orthanc whole-slide imaging plugin uses metadata 4200
  "UserMetadata" : {
    // "Sample" : 1024
  },

  // Dictionary of symbolic names for the user-defined types of
  // attached files. Each entry must map an unique string to an unique
  // number between 1024 and 65535. Optionally, a second argument can
  // provided to specify a MIME content type for the attachment.
  "UserContentType" : {
    // "sample" : 1024
    // "sample2" : [ 1025, "application/pdf" ]
  },

  // Number of seconds without receiving any instance before a
  // patient, a study or a series is considered as stable.
  "StableAge" : 60,

  // By default, Orthanc compares AET (Application Entity Titles) in a
  // case-insensitive way. Setting this option to "true" will enable
  // case-sensitive matching.
  "StrictAetComparison" : false,

  // When the following option is "true", the MD5 of the DICOM files
  // will be computed and stored in the Orthanc database. This
  // information can be used to detect disk corruption, at the price
  // of a small performance overhead.
  "StoreMD5ForAttachments" : true,

  // The maximum number of results for a single C-FIND request at the
  // Patient, Study or Series level. Setting this option to "0" means
  // no limit.
  "LimitFindResults" : 0,

  // The maximum number of results for a single C-FIND request at the
  // Instance level. Setting this option to "0" means no limit.
  "LimitFindInstances" : 0,

  // The maximum number of active jobs in the Orthanc scheduler. When
  // this limit is reached, the addition of new jobs is blocked until
  // some job finishes.
  "LimitJobs" : 10,

  // If this option is set to "false", Orthanc will not log the
  // resources that are exported to other DICOM modalities of Orthanc
  // peers in the URI "/exports". This is useful to prevent the index
  // to grow indefinitely in auto-routing tasks.
  "LogExportedResources" : true,

  // Enable or disable HTTP Keep-Alive (deprecated). Set this option
  // to "true" only in the case of high HTTP loads.
  "KeepAlive" : false,

  // If this option is set to "false", Orthanc will run in index-only
  // mode. The DICOM files will not be stored on the drive. Note that
  // this option might prevent the upgrade to newer versions of Orthanc.
  "StoreDicom" : true,

  // DICOM associations are kept open as long as new DICOM commands
  // are issued. This option sets the number of seconds of inactivity
  // to wait before automatically closing a DICOM association. If set
  // to 0, the connection is closed immediately.
  "DicomAssociationCloseDelay" : 5,

  // Maximum number of query/retrieve DICOM requests that are
  // maintained by Orthanc. The least recently used requests get
  // deleted as new requests are issued.
  "QueryRetrieveSize" : 100,

  // When handling a C-Find SCP request, setting this flag to "true"
  // will enable case-sensitive match for PN value representation
  // (such as PatientName). By default, the search is
  // case-insensitive, which does not follow the DICOM standard.
  "CaseSensitivePN" : false,

  // Configure PKCS#11 to use hardware security modules (HSM) and
  // smart cards when carrying on HTTPS client authentication.
  /**
     "Pkcs11" : {
       "Module" : "/usr/local/lib/libbeidpkcs11.so",
       "Module" : "C:/Windows/System32/beidpkcs11.dll",
       "Pin" : "1234",
       "Verbose" : true
     }
   **/
  
  // If set to "true", Orthanc will still handle "SOP Classes in
  // Study" (0008,0062) in C-FIND requests, even if the "SOP Class
  // UID" metadata is not available in the database (which is the case
  // if the DB was previously used by Orthanc <= 1.1.0). This option
  // is turned off by default, as it requires intensive accesses to
  // the hard drive.
  "AllowFindSopClassesInStudy" : true,

  // If set to "false", Orthanc will not load its default dictionary
  // of private tags. This might be necessary if you cannot import a
  // DICOM file encoded using the Implicit VR Endian transfer syntax,
  // and containing private tags: Such an import error might stem from
  // a bad dictionary. You can still list your private tags of
  // interest in the "Dictionary" configuration option below.
  "LoadPrivateDictionary" : true,

  // Register a new tag in the dictionary of DICOM tags that are known
  // to Orthanc. Each line must contain the tag (formatted as 2
  // hexadecimal numbers), the value representation (2 upcase
  // characters), a nickname for the tag, possibly the minimum
  // multiplicity (> 0 with defaults to 1), possibly the maximum
  // multiplicity (0 means arbitrary multiplicity, defaults to 1), and
  // possibly the Private Creator (for private tags).
  "Dictionary" : {
    // "0014,1020" : [ "DA", "ValidationExpiryDate", 1, 1 ]
    // "00e1,10c2" : [ "UI", "PET-CT Multi Modality Name", 1, 1, "ELSCINT1" ]
    // "7053,1003" : [ "ST", "Original Image Filename", 1, 1, "Philips PET Private Group" ]
    // "2001,5f" : [ "SQ", "StackSequence", 1, 1, "Philips Imaging DD 001" ]
  }
}

