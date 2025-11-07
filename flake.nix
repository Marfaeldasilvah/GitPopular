{
  description = "Github-Popular";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodePackages.live-server # Servidor-rápido
        vscode-langservers-extracted # LSP's
        typescript-language-server # Outra LSP
	gemini-cli #CodeAgent
      ];

      shellHook = ''
        echo "JS ENV Loaded."
      '';
    };
  };
}
