/**
 * Created by admin on 2018/10/13.
 */
let tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
};
let tree1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            }
        },
        right: {
            val: 5,
            left: {
                val: 10,
                left: null,
                right: null
            },
            right: {
                val: 11,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: {
                val: 12,
                left: null,
                right: null
            },
            right: {
                val: 13,
                left: null,
                right: null
            }
        },
        right: {
            val: 7,
            left: {
                val: 14,
                left: null,
                right: null
            },
            right: {
                val: 15,
                left: null,
                right: null
            }
        }
    }
};
let tree2 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    }
};
let tree3 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 6,
                left: null,
                right: null
            }
        },
        right: {
            val: 4,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        },
        right: {
            val: 3,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    }
};

let tree4 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

let searchTree = {
    val: 6,
    left: {
        val: 9,
        left: {
            val: 2,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 13,
        left: {
            val: 8,
            left: null,
            right: {
                val: 4,
                left: null,
                right: null
            }
        },
        right: null
    }
}

let balanceTree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

//完全二叉树
let completeTree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null,
            },
            right: {
                val: 9,
                left: null,
                right: null,
            },
        },
        right: {
            val: 5,
            left: {
                val: 10,
                left: null,
                right: null,
            },
            right: {
                val: 11,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: {
                val: 12,
                left: null,
                right: null,
            },
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
}

module.exports = {
    tree,
    tree1,
    tree2,
    tree3,
    tree4,
    searchTree,
    balanceTree,
    completeTree,
};