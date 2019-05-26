			let tokenAddress = "0x0f5d2fb29fb7d3cfee444a200298f468908cc942";
			let walletAddress = web3.eth.accounts[0];
			// The minimum ABI to get ERC20 Token balance
			let minABI = [
			  // balanceOf
			  {
			    "constant":true,
			    "inputs":[{"name":"_owner","type":"address"}],
			    "name":"balanceOf",
			    "outputs":[{"name":"balance","type":"uint256"}],
			    "type":"function"
			  },
			  // decimals
			  {
			    "constant":true,
			    "inputs":[],
			    "name":"decimals",
			    "outputs":[{"name":"","type":"uint8"}],
			    "type":"function"
			  }
			];

			// Get ERC20 Token contract instance
			let contract = web3.eth.contract(minABI).at(tokenAddress);

			// Call balanceOf function
			contract.balanceOf(walletAddress, (error, balance) => {
			  // Get decimals
			  contract.decimals((error, decimals) => {
			    // calculate a balance
			    balance = balance.div(10**decimals);
			    $('#balance').text("Balance: ⏣"+(Math.round(balance * 1) / 1));
			  });
			});

