/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/feature': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.feature.id'];
          created_at?: parameters['rowFilter.feature.created_at'];
          name?: parameters['rowFilter.feature.name'];
          description?: parameters['rowFilter.feature.description'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['feature'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** feature */
          feature?: definitions['feature'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.feature.id'];
          created_at?: parameters['rowFilter.feature.created_at'];
          name?: parameters['rowFilter.feature.name'];
          description?: parameters['rowFilter.feature.description'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.feature.id'];
          created_at?: parameters['rowFilter.feature.created_at'];
          name?: parameters['rowFilter.feature.name'];
          description?: parameters['rowFilter.feature.description'];
        };
        body: {
          /** feature */
          feature?: definitions['feature'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/vote': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.vote.id'];
          created_at?: parameters['rowFilter.vote.created_at'];
          voter_id?: parameters['rowFilter.vote.voter_id'];
          feature_id?: parameters['rowFilter.vote.feature_id'];
          voter_name?: parameters['rowFilter.vote.voter_name'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['vote'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** vote */
          vote?: definitions['vote'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.vote.id'];
          created_at?: parameters['rowFilter.vote.created_at'];
          voter_id?: parameters['rowFilter.vote.voter_id'];
          feature_id?: parameters['rowFilter.vote.feature_id'];
          voter_name?: parameters['rowFilter.vote.voter_name'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.vote.id'];
          created_at?: parameters['rowFilter.vote.created_at'];
          voter_id?: parameters['rowFilter.vote.voter_id'];
          feature_id?: parameters['rowFilter.vote.feature_id'];
          voter_name?: parameters['rowFilter.vote.voter_name'];
        };
        body: {
          /** vote */
          vote?: definitions['vote'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/meow_cats_translations': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.meow_cats_translations.id'];
          created_at?: parameters['rowFilter.meow_cats_translations.created_at'];
          hex?: parameters['rowFilter.meow_cats_translations.hex'];
          translation?: parameters['rowFilter.meow_cats_translations.translation'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['meow_cats_translations'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** meow_cats_translations */
          meow_cats_translations?: definitions['meow_cats_translations'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.meow_cats_translations.id'];
          created_at?: parameters['rowFilter.meow_cats_translations.created_at'];
          hex?: parameters['rowFilter.meow_cats_translations.hex'];
          translation?: parameters['rowFilter.meow_cats_translations.translation'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.meow_cats_translations.id'];
          created_at?: parameters['rowFilter.meow_cats_translations.created_at'];
          hex?: parameters['rowFilter.meow_cats_translations.hex'];
          translation?: parameters['rowFilter.meow_cats_translations.translation'];
        };
        body: {
          /** meow_cats_translations */
          meow_cats_translations?: definitions['meow_cats_translations'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  /** @description Provides definition of a feature */
  feature: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /** Format: character varying */
    name: string;
    /** Format: text */
    description?: string;
  };
  /** @description Holds all votes and voter info */
  vote: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /** Format: bigint */
    voter_id: number;
    /** Format: bigint */
    feature_id: number;
    /** Format: character varying */
    voter_name: string;
  };
  meow_cats_translations: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /** Format: character varying */
    hex: string;
    /** Format: text */
    translation: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: 'params=single-object';
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none';
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: 'count=none';
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description feature */
  'body.feature': definitions['feature'];
  /** Format: bigint */
  'rowFilter.feature.id': string;
  /** Format: timestamp with time zone */
  'rowFilter.feature.created_at': string;
  /** Format: character varying */
  'rowFilter.feature.name': string;
  /** Format: text */
  'rowFilter.feature.description': string;
  /** @description vote */
  'body.vote': definitions['vote'];
  /** Format: bigint */
  'rowFilter.vote.id': string;
  /** Format: timestamp with time zone */
  'rowFilter.vote.created_at': string;
  /** Format: bigint */
  'rowFilter.vote.voter_id': string;
  /** Format: bigint */
  'rowFilter.vote.feature_id': string;
  /** Format: character varying */
  'rowFilter.vote.voter_name': string;
  /** @description meow_cats_translations */
  'body.meow_cats_translations': definitions['meow_cats_translations'];
  /** Format: bigint */
  'rowFilter.meow_cats_translations.id': string;
  /** Format: timestamp with time zone */
  'rowFilter.meow_cats_translations.created_at': string;
  /** Format: character varying */
  'rowFilter.meow_cats_translations.hex': string;
  /** Format: text */
  'rowFilter.meow_cats_translations.translation': string;
}

export interface operations {}

export interface external {}